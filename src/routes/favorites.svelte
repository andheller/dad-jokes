<script>
  import Nav from "../components/Nav.svelte";
  import FavoriteCard from "../components/FavoriteCard.svelte";
</script>

<svelte:head><title>Favorite Jokes</title>'</svelte:head>

<Nav />

<div class="hero-bg">
  <div
    class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
  >
    <h1 class="text-3xl tracking-tight text-gray-900 sm:text-4xl text-white">
      Favorites
    </h1>
  </div>
</div>

<div class="p-8">
  <FavoriteCard />
</div>

<style>
  .hero-bg {
    background: conic-gradient(
      at left top,
      rgb(107, 33, 168),
      rgb(2, 132, 199),
      rgb(21, 94, 117)
    );
  }
</style>
