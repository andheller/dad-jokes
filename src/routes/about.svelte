<script>
  import { fetchJoke } from "../jokestore";
  import Nav from "../components/Nav.svelte";
  import JokeCard from "../components/JokeCard.svelte";
  import Confetti from "../components/confetti.svelte";
  let visible = false;
</script>

<svelte:head><title>About</title></svelte:head>
<Nav />

<div class="hero-bg">
  <div
    class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
  >
    <h1 class="text-3xl tracking-tight text-gray-900 sm:text-4xl text-white">
      About
    </h1>
  </div>
</div>

<div class="relative px-4 sm:px-6 lg:px-8">
  <div class="text-lg max-w-prose mx-auto">
    <p class="mt-8 text-xl text-gray-700 leading-8">
      Sveltekit project running on CloudFlare Pages using Cloudflare workers and
      CloudFlare KV! Thank you to <a
        class="underline text-[#db3e6d]"
        href="http://icanhazdadjoke.com/">icanhazdadjoke.com</a
      >
      for all the jokes. <br /> <br />
      See the Repo on
      <a
        class="underline text-[#db3e6d]"
        href="https://github.com/andheller/dad-jokes"
      >
        GitHub</a
      >
    </p>
  </div>
</div>

<style>
  .hero-bg {
    background: conic-gradient(
      at left center,
      rgb(244, 63, 94),
      rgb(67, 56, 202)
    );
  }
</style>
