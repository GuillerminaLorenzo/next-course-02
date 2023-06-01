import { Fragment } from "react";

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and shipswith built-in SSR.",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and shipswith built-in SSR.",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs2",
  },
  {
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and shipswith built-in SSR.",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs3",
  },
  {
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and shipswith built-in SSR.",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs4",
  },
];

export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}
