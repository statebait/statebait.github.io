<script>
  export let airaLabel;
  export let name;
  export let description;
  export let link;
</script>

<style>
  .card {
    max-width: 500px;
  }
</style>

<a
  class="card text-primary border-primary flex rounded-lg border-2 bg-black bg-opacity-25
    space-x-4 p-5 border-opacity-25 hover:border-white hover:text-white mx-3"
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
