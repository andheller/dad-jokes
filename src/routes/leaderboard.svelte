<script>
  import Nav from "../components/Nav.svelte";
  import Leaderboard from "../components/leaderboard.svelte";
</script>

<svelte:head><title>Joke Leaderboard</title>'</svelte:head>

<Nav />

<div class="hero-bg">
  <div
    class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
  >
    <h1 class="text-3xl tracking-tight text-gray-900 sm:text-4xl text-white">
      Joke Leaderboard
    </h1>
  </div>
</div>

<div class="p-8">
  <Leaderboard />
</div>

<style>
  .hero-bg {
    background: conic-gradient(
      at left center,
      rgb(5, 150, 105),
      rgb(3, 105, 161),
      rgb(4, 120, 87)
    );
  }
</style>
