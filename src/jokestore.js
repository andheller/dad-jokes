import { browser } from "$app/env";

import { writable, derived } from "svelte/store";

export const jokeArr = writable([]);

export const favoriteArr = derived(jokeArr, ($jokeArr) =>
  $jokeArr.filter(function (el) {
    return el.favorite == true;
  })
);

if (browser) {
  if (localStorage.jokeArr) {
    jokeArr.update((n) => JSON.parse(localStorage.jokeArr));
  }
  jokeArr.subscribe((value) => (localStorage.jokeArr = JSON.stringify(value)));
}

export const fetchLocal = () => {
  if (typeof window !== "undefined") {
    if (typeof localStorage.jokeArr !== "undefined") {
      $jokeArr = JSON.parse(localStorage.getItem("jokeArr"));
    }
    //JSON.parse(localStorage.getItem('jokeArr')) || []
  }
};

export const fetchJoke = async () => {
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const res = await jokeData.json();
  let currentJokes = JSON.parse(localStorage.getItem("jokeArr"));

  if (currentJokes.find((x) => x.id === res.id)) {
    fetchJoke();
  } else {
    jokeArr.update((v) => {
      v.unshift({ id: res.id, joke: res.joke, favorite: false });
      return v;
    });
  }
};

export const fetchHalloweenJoke = async () => {
  const jokeData = await fetch(
    "https://favorite-jokes.cofocuslabs.workers.dev/halloween",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  const res = await jokeData.json();

  let currentJokes = JSON.parse(localStorage.getItem("jokeArr"));

  if (currentJokes.find((x) => x.id === res.id)) {
    fetchJoke();
  } else {
    jokeArr.update((v) => {
      v.unshift({ id: res.id, joke: res.joke, favorite: false });
      return v;
    });
  }
};

async function updateFavorite(data) {
  url = "https://favorite-jokes.cofocuslabs.workers.dev/update";

  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    //redirect: "follow", // manual, *follow, error
    //referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
