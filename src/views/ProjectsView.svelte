<script>
  import ProjectCard from "../components/ProjectCard.svelte";
  import GiStack from "svelte-icons/gi/GiStack.svelte";
  import FaBiohazard from "svelte-icons/fa/FaBiohazard.svelte";
  import MdWeb from "svelte-icons/md/MdWeb.svelte";
</script>

<div class="flex flex-col items-center mt-24 projects-view">
  <h1 class="text-3xl sm:text-4xl montserrat text-bold text-white mt-5">
    Projects
  </h1>
  <div class="grid mt-10 gap-8 xl:grid-cols-2">
    <ProjectCard
      name="Darkrai"
      description="Darkrai is a browser extension that enables you to chat with the people visiting the same website."
      link="https://github.com/darkraichat"
    >
      <div class="w-16">
        <GiStack />
      </div>
    </ProjectCard>
    <ProjectCard
      name="Bio-modelling Web App"
      description="A Web Pipeline for visualizing and simulating kinetic(ODE-based) biological models."
      link="https://github.com/HelikarLab/ode-app"
    >
      <div class="w-16">
        <FaBiohazard />
      </div>
    </ProjectCard>
  </div>
</div>

<style>
  .projects-view {
    height: 80vh;
  }
</style>
