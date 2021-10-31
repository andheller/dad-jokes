<script>
  import Nav from "../components/Nav.svelte";
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
      This is a <a
        class="underline text-[#f97316]"
        href="https://kit.svelte.dev/">Sveltekit</a
      >
      project running on
      <a class="underline text-[#f97316]" href="https://pages.cloudflare.com/"
        >CloudFlare Pages</a
      >
      using
      <a class="underline text-[#f97316]" href="https://workers.cloudflare.com/"
        >Cloudflare workers</a
      >
      and
      <a
        class="underline text-[#f97316]"
        href="https://developers.cloudflare.com/workers/runtime-apis/kv"
        >CloudFlare KV!</a
      >
      <br /><br />
      Thank you to
      <a class="underline text-[#f97316]" href="http://icanhazdadjoke.com/"
        >icanhazdadjoke.com</a
      >
      for all the jokes. <br /> <br />
      See the Repo on
      <a
        class="underline text-[#f97316]"
        href="https://github.com/andheller/dad-jokes"
      >
        GitHub</a
      >
    </p>
  </div>
</div>

<style>
  .hero-bg {
    background: linear-gradient(
      to right,
      #f97316,
      rgb(243, 87, 3),
      rgb(249, 115, 22),
      #fbbf24
    );
  }
</style>
