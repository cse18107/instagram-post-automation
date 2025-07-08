// postStore.js
import {create} from "zustand";

// Sample seed data (optional – remove or replace with your own fetch logic)
const initialPosts = [
  {
    id: 1,
    image: "https://i.insider.com/6644ddd4b4abc992e8c9d4d1?width=700",
    description:
      "Kicking off the week at an AI‑driven art exhibit 🤖🎨 — the future has never looked this vivid!",
    likes: 1352,
    comments: 48,
    commentMessage: "",
    dm: "",
  },
  {
    id: 2,
    image: "https://vitalentum.net/upload/016/u1622/b/c/0e9ce221.webp",
    description:
      "Neon dreams and diffusion streams ✨🕶️— experimenting with latent creativity all night long.",
    likes: 987,
    comments: 31,
    commentMessage: "",
    dm: "",
  },
  {
    id: 3,
    image:
      "https://www.state.gov/wp-content/uploads/2021/06/Artificial-Intelligence-Global-Partnerships-1024x571.jpg",
    description:
      "Cross‑border collaboration to unlock AI’s full potential 🌐🤝 #GlobalPartnerships",
    likes: 2021,
    comments: 77,
    commentMessage: "",
    dm: "",
  },
  {
    id: 4,
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/331169-2-microsoft-ai-tour?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=832&hei=468&qlt=100&fmt=png-alpha&fit=constrain",
    description:
      "Highlights from the Microsoft AI Tour — mind = blown 💥 #AIFuture",
    likes: 1784,
    comments: 62,
    commentMessage: "",
    dm: "",
  },
];

const postStore = (set, get) => ({
  posts: initialPosts,

  getPosts: () => get().posts,
  getPostById: (id) => get().posts.find((post) => post.id === id),
  updatePost: (id, updatedData) => {

    const updatedPosts = get().posts.map((post) =>
      String(post.id) === String(id) ? {...post, ...updatedData} : post
    );
    set({posts: updatedPosts});
  },

  reset: () => {
    set({
      posts: [],
    });
  },
});

const usePostStore = create(postStore);

export default usePostStore;
