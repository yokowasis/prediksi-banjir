<script lang="ts">
  let statusBanjir = ["", "", "", "", "", ""];

  // https://4001.app.web.id/
  async function proses() {
    statusBanjir = ["", "", "Loading...", "", "", "", ""];
    const kode_pintu = parseInt(
      (document.getElementById("namapintu") as HTMLInputElement).value
    );
    const tinggi_air = (document.getElementById("tinggi") as HTMLInputElement)
      .value;
    const kode_kota = parseInt(
      (document.getElementById("kota") as HTMLInputElement).value
    );

    const kode_kota_text = (
      document.getElementById("kota") as HTMLSelectElement
    ).options[kode_kota].text;

    const kode_pintu_text = (
      document.getElementById("namapintu") as HTMLSelectElement
    ).options[kode_pintu].text;

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
      statusBanjir = arr;
    } catch (error) {
      console.log(error);
    }
  }
</script>

<div class="container mt-3">
  <div class="row">
    <div class="col">
      <div>
        <img src="/peta.jpeg" alt="peta" class="w-100 mb-2" />
      </div>
      <div class="card">
        <div class="card-header bg-primary text-white">Prediksi</div>
        <div class="card-body">
          <div class="form-group mb-3 text-center">
            <label for="nama" class="mb-2">Propinsi</label>
            <input
              type="text"
              class="form-control text-center"
              id="propinsi"
              value="Jakarta"
            />
          </div>
          <div class="form-group mb-3 text-center">
            <label for="kota" class="mb-2">Kota / Kab.</label>
            <select class="form-control text-center" id="kota" name="kota">
              <option value="0">Jakarta Selatan</option>
              <option value="1">Jakarta Timur</option>
              <option value="2">Jakarta Utara</option>
              <option value="3">Jakarta Pusat</option>
              <option value="4">Jakarta Barat</option>
            </select>
          </div>
          <div class="form-group mb-3 text-center">
            <label for="namapintu" class="mb-2">Nama Pintu Air</label>
            <select
              class="form-control text-center"
              id="namapintu"
              name="namapintu"
            >
              <option value="0">PA. Cibalok - Gadog</option>
              <option value="1">P.A. Hek</option>
              <option value="2">PA. Pulo Gadung</option>
              <option value="3">PS. Cipinang Hulu</option>
              <option value="4">PS. Krukut Hulu</option>
              <option value="5">PS. Angke Hulu</option>
              <option value="6">Pompa Yos Sudarso 1</option>
              <option value="7">PS. Katulampa (Hulu)</option>
              <option value="8">PS. Depok</option>
              <option value="9">PA. Manggarai</option>
              <option value="10">Pompa Cideng</option>
              <option value="11">P.A. Karet</option>
              <option value="12">P.A. Marina Ancol </option>
              <option value="13">Pompa Pasar Ikan</option>
              <option value="14">P.A. Pluit</option>
              <option value="15">PS. Pesanggrahan</option>
              <option value="16">PS. Sunter Hulu</option>
              <option value="17">Pompa Kali Duri (Kalijodo)</option>
              <option value="18">P.A. Istiqlal </option>
              <option value="19">P.A. Jembatan Merah</option>
              <option value="20">P.A. Ancol Flusing</option>
              <option value="21">P.A. Flusing Ancol</option>
              <option value="22">Bendung. Cibalok - Gadog</option>
              <option value="23">Bendung. Katulampa (Hulu)</option>
              <option value="24">Pompa. Pluit</option>
            </select>
          </div>
          <div class="form-group mb-3 text-center">
            <label for="tinggi" class="mb-2">Tinggi Permukaan Air</label>
            <input
              class="text-center form-control"
              type="number"
              id="tinggi"
              name="tinggi"
            />
          </div>
          <div class="text-center d-grid gap-2">
            <button class="btn btn-primary" on:click={proses}>Proses</button>
            <a href="/pilihan" class="btn btn-danger">Kembali</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col pb-5">
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
