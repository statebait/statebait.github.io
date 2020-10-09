<script>
  export let href;
  export let name;
</script>

<a
  {href}
  target="_blank"
  rel="noopener"
  class="w-8 h-8 block m-3 tooltip"
  aria-label={`${name} link`}>
  <slot />
  <div class="tooltiptext">{name}</div>
</a>
