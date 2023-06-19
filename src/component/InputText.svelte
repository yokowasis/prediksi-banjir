<script lang="ts">
  export let label = "";
  export let id = "id";
  export let value = "";
  export let placeholder = "";
  export let alignment: "left" | "center" | "right" = "left";
  export let className = "";
  export let containerClassName = "";
</script>

<div class={`form-group ${containerClassName}`}>
  {#if label !== ""}
    <label for={id} class="mb-2">{label}</label>
  {/if}
  <input
    class={`form-control text-${alignment} ${className}`}
    {placeholder}
    type="text"
    {id}
    name={id}
    bind:value
  />
</div>
