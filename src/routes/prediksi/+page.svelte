<script lang="ts">
  import InputNumber from "../../component/InputNumber.svelte";
  import InputText from "../../component/InputText.svelte";
  import Select from "../../component/Select.svelte";
  import { getText, getVal } from "../../component/fn";

  let statusBanjir = ["", "", "", "", "", ""];

  let tinggiAir = "0";

  $: {
    console.log(tinggiAir);
  }

  // https://4001.app.web.id/
  async function proses() {
    statusBanjir = ["", "", "Loading...", "", "", "", ""];
    const kode_pintu = parseInt(
      (document.getElementById("namapintu") as HTMLInputElement).value
    );
    const tinggi_air = getVal("tinggi");
    const kode_kota = parseInt(getVal("kota"));
    const kode_kota_text = getText("kota");
    const kode_pintu_text = getText("namapintu");

    const data = {
      kode_pintu,
      tinggi_air,
      kode_kota,
    };

    const r = await fetch(`https://4001.app.web.id/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    try {
      const json = await r.json();
      console.log(json);
      const arr = [
        "1",
        "Jakarta",
        kode_kota_text,
        kode_pintu_text,
        tinggi_air,
        `<span class="fw-bold text-primary">${json.data.banjir}</span>`,
      ];
      let history = JSON.parse(localStorage.getItem("history") || "[]");
      history.push(arr);
      localStorage.setItem("history", JSON.stringify(history));

      statusBanjir = arr;
    } catch (error) {
      console.log(error);
    }
  }
</script>

<div class="container mt-3">
  <div class="row d-flex justify-content-center">
    <div class="col col-sm-8 col-md-5">
      <div>
        <img src="/peta.jpeg" alt="peta" class="w-100 mb-2" />
      </div>
      <div class="card">
        <div class="card-header bg-primary text-white">Prediksi</div>
        <div class="card-body">
          <InputText
            containerClassName="text-center mb-4"
            alignment="center"
            id="propinsi"
            label="Propinsi"
            value="Jakarta"
          />
          <Select
            containerClassName="mb-3 text-center"
            label="Kota / Kab."
            id="kota"
            alignment="center"
            options={[
              {
                value: "0",
                text: "Jakarta Selatan",
              },
              {
                value: "1",
                text: "Jakarta Timur",
              },
              {
                value: "2",
                text: "Jakarta Utara",
              },
              {
                value: "3",
                text: "Jakarta Pusat",
              },
              {
                value: "4",
                text: "Jakarta Barat",
              },
            ]}
          />
          <Select
            id="namapintu"
            label="Nama Pintu Air"
            containerClassName="mb-3 text-center"
            alignment="center"
            options={[
              { value: "0", text: "PA. Cibalok - Gadog" },
              { value: "1", text: "P.A. Hek" },
              { value: "2", text: "PA. Pulo Gadung" },
              { value: "3", text: "PS. Cipinang Hulu" },
              { value: "4", text: "PS. Krukut Hulu" },
              { value: "5", text: "PS. Angke Hulu" },
              { value: "6", text: "Pompa Yos Sudarso 1" },
              { value: "7", text: "PS. Katulampa (Hulu" },
              { value: "8", text: "PS. Depok" },
              { value: "9", text: "PA. Manggarai" },
              { value: "10", text: "Pompa Cideng" },
              { value: "11", text: "P.A. Karet" },
              { value: "12", text: "P.A. Marina Ancol " },
              { value: "13", text: "Pompa Pasar Ikan" },
              { value: "14", text: "P.A. Pluit" },
              { value: "15", text: "PS. Pesanggrahan" },
              { value: "16", text: "PS. Sunter Hulu" },
              { value: "17", text: "Pompa Kali Duri (Kalijodo" },
              { value: "18", text: "P.A. Istiqlal " },
              { value: "19", text: "P.A. Jembatan Merah" },
              { value: "20", text: "P.A. Ancol Flusing" },
              { value: "21", text: "P.A. Flusing Ancol" },
              { value: "22", text: "Bendung. Cibalok - Gadog" },
              { value: "23", text: "Bendung. Katulampa (Hulu" },
              { value: "24", text: "Pompa. Pluit" },
            ]}
          />
          <InputNumber
            id="tinggi"
            label="Tinggi Permukaan Air"
            containerClassName="text-center mb-4"
            alignment="center"
          />
          <div class="text-center d-grid gap-2">
            <button class="btn btn-primary" on:click={proses}>Proses</button>
            <a href="/pilihan" class="btn btn-danger">Kembali</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row d-flex justify-content-center">
    <div class="col col-sm-8 col-md-5 pb-5">
      <div class="table-responsive pb-5 border-1 border mt-3">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Propinsi</th>
              <th scope="col">Kota / Kab.</th>
              <th scope="col">Nama Pintu Air</th>
              <th scope="col">Tinggi Muka Air</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {#each statusBanjir as td}
                <td>{@html td}</td>
              {/each}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
