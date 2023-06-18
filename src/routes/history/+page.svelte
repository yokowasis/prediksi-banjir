<script lang="ts">
  import { onMount } from "svelte";

  let history: string[][] = [];

  onMount(() => {
    history = JSON.parse(localStorage.getItem("history") || "[]");
  });
</script>

<div class="container">
  <div class="row">
    <div class="col">
      <div class="card mt-3">
        <div class="card-header">History</div>
        <div class="card-body p-3">
          <table class="table table-bordered mt-3">
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
              {#each history as item, i}
                <tr>
                  <th scope="row">{i + 1}</th>
                  {#each item as data}
                    <td>{@html data}</td>
                  {/each}
                </tr>
              {/each}
            </tbody>
          </table>
          <div class="d-grid gap-2">
            <a href="/pilihan" class="btn btn-danger">Kembali</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
