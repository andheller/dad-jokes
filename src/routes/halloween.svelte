<script>
  import { fetchHalloweenJoke } from "../jokestore";
  import Nav from "../components/Nav.svelte";
  import JokeCard from "../components/JokeCard.svelte";
  import Confetti from "../components/halloween-confetti.svelte";
  let visible = false;
</script>

<Nav />

<div class="hero-bg">
  <div
    class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
  >
    <h1 class="text-3xl tracking-tight text-gray-900 sm:text-4xl text-white">
      Ready for a Halloween joke?
    </h1>
    <div class="mt-8 flex justify-center">
      <div class="relative group">
        <div
          class="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-[#F97316] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
        />
        <button
          on:click={fetchHalloweenJoke}
          on:click={() => {
            visible = true;
            setTimeout(function () {
              visible = false;
            }, 3000);
          }}
          class="text-white relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600"
        >
          New Joke
        </button>
      </div>
      <div class={visible ? "" : "hidden"}>
        <Confetti durationInSeconds={2.7} />
      </div>
    </div>
  </div>
</div>

<div class="p-8">
  <JokeCard />
</div>

<style>
  .hero-bg {
    background: linear-gradient(
      to right,
      rgb(55, 65, 81),
      rgb(17, 24, 39),
      rgb(0, 0, 0)
    );
  }
</style>
