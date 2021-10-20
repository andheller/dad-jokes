<script>
  import { fetchJoke } from "../jokestore";
  import Nav from "../components/Nav.svelte";
  import JokeCard from "../components/JokeCard.svelte";
  import Confetti from "../components/confetti.svelte";
  let visible = false;
</script>

<svelte:head><title>Jokes</title></svelte:head>
<Nav />

<div class="hero-bg">
  <div
    class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
  >
    <h1 class="text-3xl tracking-tight text-gray-900 sm:text-4xl text-white">
      Ready for a joke?
    </h1>
    <div class="mt-8 flex justify-center">
      <a
        href="#"
        on:click={fetchJoke}
        on:click={() => {
          visible = true;
          setTimeout(function () {
            visible = false;
          }, 1500);
        }}
        class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-blue-50 hover:bg-blue-100"
      >
        New Joke
      </a>
      <div class={visible ? "" : "hidden"}>
        <Confetti durationInSeconds={1.7} />
      </div>
    </div>
  </div>
</div>

<div class="p-8">
  <JokeCard />
</div>

<style>
  .hero-bg {
    background: linear-gradient(to right, rgb(56, 189, 248), rgb(59, 130, 246));
  }
</style>
