<script>
  import FaGithub from "svelte-icons/fa/FaGithub.svelte";
  import FaTwitter from "svelte-icons/fa/FaTwitter.svelte";
  import FaMediumM from "svelte-icons/fa/FaMediumM.svelte";
  import FaBlog from "svelte-icons/fa/FaBlog.svelte";
  import FaDev from "svelte-icons/fa/FaDev.svelte";
  import FaHatWizard from "svelte-icons/fa/FaHatWizard.svelte";
  import Link from "./Link.svelte";
</script>

<div
  class="container mx-auto text-white flex space-x-8 justify-center mt-6
  flex-wrap animate__animated animate__fadeInUp"
>
  <Link href="https://github.com/statebait" name="GitHub">
    <FaGithub />
  </Link>
  <Link href="https://twitter.com/statebait" name="Twitter">
    <FaTwitter />
  </Link>
  <Link href="https://medium.com/@mohamedshadab78" name="Medium">
    <FaMediumM />
  </Link>
  <Link href="/blog" name="Blog">
    <FaBlog />
  </Link>
  <Link href="https://dev.to/statebait" name="dev.to">
    <FaDev />
  </Link>
  <Link href="https://sourcerer.io/statebait" name="sourcerer.io">
    <FaHatWizard />
  </Link>
</div>
