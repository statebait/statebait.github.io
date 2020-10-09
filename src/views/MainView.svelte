<script>
  import Social from "../components/Social.svelte";
  import Image from "../components/Image.svelte";
  import Name from "../components/Name.svelte";
  import FaChevronDown from "svelte-icons/fa/FaChevronDown.svelte";

  function handleClick() {
    window.scrollTo({
      top: window.innerHeight + 100,
      behavior: "smooth",
    });
  }
</script>

<div class="flex flex-col items-center mt-24 h-screen">
  <Image />
  <Name />
  <Social />
  <div
    class="mt-16 w-8 h-8 text-white animate-bounce cursor-pointer"
    on:click={handleClick}>
    <FaChevronDown />
  </div>
</div>
