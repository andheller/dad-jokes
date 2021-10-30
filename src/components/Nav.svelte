<script>
  let open = false;
  import { page } from "$app/stores";
</script>

<nav class="bg-white shadow">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button -->
        <button
          on:click={() => (open = !open)}
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <!--
              Icon when menu is closed.
  
              Heroicon name: outline/menu
  
              Menu open: "hidden", Menu closed: "block"
            -->
          <svg
            class="{open ? 'hidden' : 'block'} h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <!--
              Icon when menu is open.
  
              Heroicon name: outline/x
  
              Menu open: "block", Menu closed: "hidden"
            -->
          <svg
            class="{open ? 'block' : 'hidden'} h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div
        class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
      >
        <div
          class="{open
            ? 'block'
            : 'hidden'} mobile-menu bg-white sm:ml-6 flex flex-col sm:flex-row sm:flex sm:space-x-8"
        >
          <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
          <a
            href="/"
            class="{$page.path === '/' ? 'text-gray-900 ' : 'text-gray-500'}
            inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
          >
            Jokes
          </a>
          <a
            href="/halloween"
            class="{$page.path === '/halloween'
              ? 'text-gray-900 '
              : 'text-gray-500'}
            border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
          >
            Halloween
          </a>
          <a
            href="/favorites"
            class="{$page.path === '/favorites'
              ? 'text-gray-900 '
              : 'text-gray-500'}
            border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
          >
            Favorite Jokes
          </a>
          <a
            href="/about"
            class="{$page.path === '/favorites'
              ? 'text-gray-900 '
              : 'text-gray-500'}
            border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
          >
            About
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

<style>
  @media only screen and (max-width: 639px) {
    .mobile-menu {
      padding: 12px;
      position: absolute;
      top: 62px;
      left: 0;
      min-width: 100%;
    }
  }
</style>
