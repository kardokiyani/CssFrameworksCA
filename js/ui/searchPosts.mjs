// SEARCH POSTS

import { renderPosts } from "./renderPosts.mjs";

export function searchPosts(posts) {
    const search = document.querySelector(".search");

    search.onkeyup = function (event) {
        // console.log(event);

        const searchValue = event.target.value.trim();

        const filteredPosts = posts.filter(function (posts) {
            if (posts.title.startsWith(searchValue)) {
                return true;
            }
        });

        renderPosts(filteredPosts);
    };
}