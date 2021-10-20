<script>
  import { jokeArr } from "../jokestore";
  import { flip } from 'svelte/animate';
  const options = {duration: 350};
  function favorite(id) {
    $jokeArr.find((x) => x.id === id).favorite = !$jokeArr.find(
      (x) => x.id === id
    ).favorite;
    $jokeArr = $jokeArr;
  }
  function remove(id) {
    $jokeArr = $jokeArr.filter(function (x) {
      return x.id != id;
    });
  }
</script>

<ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {#each $jokeArr as item (item.id)}
    <li
    animate:flip={options}
      class="bg-white jokeCard col-span-1 rounded-lg shadow-md divide-y divide-gray-200 flex flex-col {item.favorite ===
      true
        ? 'border-[#7DD3FC] border-2'
        : 'border-white-500 border-2'} "
    >
      <div
        class="w-full flex items-center justify-between p-6 space-x-6 flex-1"
      >
        <div class="flex-1">
          <div class="flex items-center space-x-3">
            <h3 class="text-gray-900 text-lg">
              {item.joke}
            </h3>
          </div>
        </div>
      </div>

      <div class="flex divide-x divide-gray-200">
        <div class="w-0 flex-1 flex">
          <a
            href="#"
            on:click={favorite(item.id)}
            class="bg-white relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg  hover:text-blue-900 bg-gradient-to-r hover:from-green-50 hover:to-blue-100 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
            {#if item.favorite}
              <span class="ml-3">Unfavorite</span>
            {:else}
              <span class="ml-3">Favorite</span>
            {/if}
          </a>
        </div>
        <div class="-ml-px w-0 flex-1 flex">
          <a
            href="#"
            on:click={remove(item.id)}
            class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-red-900  bg-gradient-to-r hover:from-red-100 hover:to-red-200 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="ml-3">Remove</span>
          </a>
        </div>
      </div>
    </li>
  {/each}
</ul>
