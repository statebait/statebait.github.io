<script>
  export let airaLabel;
  export let name;
  export let description;
  export let link;
</script>

<style>
  .card {
    max-width: 500px;
    background-color: #1f1f1f;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }

  .card:hover {
    -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  }
</style>

<a
  class="card text-white flex rounded-lg space-x-4 p-5 mx-3"
  target="_blank"
  rel="noopener"
  aria-label={airaLabel}
  href={link}>
  <div class="flex items-center h-20 w-16">
    <slot />
  </div>
  <div>
    <div class="font-bold text-xl">{name}</div>
    <div>{description}</div>
  </div>
</a>
