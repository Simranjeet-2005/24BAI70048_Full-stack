import { createSelector } from "reselect";

// Basic selector
export const selectPosts = (state) =>
  state.posts.posts;

// Memoized selector: Total number of posts
export const selectTotalPosts = createSelector(
  [selectPosts],
  (posts) => posts.length
);

// Memoized selector: Twitter posts
export const selectTwitterPosts = createSelector(
  [selectPosts],
  (posts) =>
    posts.filter(
      (post) => post.platform === "Twitter"
    )
);

// Memoized selector: LinkedIn posts
export const selectLinkedInPosts = createSelector(
  [selectPosts],
  (posts) =>
    posts.filter(
      (post) => post.platform === "LinkedIn"
    )
);

// Memoized selector: Instagram posts
export const selectInstagramPosts = createSelector(
  [selectPosts],
  (posts) =>
    posts.filter(
      (post) => post.platform === "Instagram"
    )
);