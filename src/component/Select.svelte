<script lang="ts">
  import { onMount } from "svelte";

  export let label = "";
  export let id = "id";
  export let value = "";
  export let alignment: "left" | "center" | "right" = "left";
  export let className = "";
  export let containerClassName = "";

  export let options: { text: string; value: string }[] = [];
</script>

<div class={`form-group ${containerClassName}`}>
  {#if label !== ""}
    <label for={id} class="mb-2">{label}</label>
  {/if}
  <select
    {value}
    class={`form-control text-${alignment} ${className}`}
    {id}
    name={id}
  >
    {#each options as option}
      <option value={option.value}>{option.text}</option>
    {/each}
  </select>
</div>
