<script>
  import Nav from "../components/Nav.svelte";
  import FavoriteCard from "../components/FavoriteCard.svelte";
</script>

<svelte:head><title>Favorite Jokes</title>'</svelte:head>

<Nav />

<div class="bg-white">
  <div
    class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
  >
    <h1 class="text-6xl tracking-tight text-gray-900 sm:text-4xl">
      Favorites
    </h1>

    <FavoriteCard />
  </div>
</div>
