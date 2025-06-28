import { sanityClient } from "sanity:client";
import groq from "groq";
import siteQuery from "@/lib/sanity/queries/site.query.ts";
import homeQuery from "@/lib/sanity/queries/home.query.ts";
import postsQuery from "@/lib/sanity/queries/posts.query.ts";
import postQuery from "@/lib/sanity/queries/post.query.ts";
import type { Home, Post, Site } from "./codegen/sanity.types";

export async function getSite(): Promise<Site> {
  const site = await sanityClient.fetch<Site>(siteQuery);

  if (!site) {
    throw new Error("Site not found");
  }

  return site;
}

export async function getHome(): Promise<Home> {
  const home = await sanityClient.fetch<Home>(homeQuery);

  if (!home) {
    throw new Error("Home document not found");
  }

  return home;
}

export async function getNewsLandingPage(): Promise<Home> {
  const home = await sanityClient.fetch<Home>(homeQuery, {
    slug: "news",
  });

  if (!home) {
    throw new Error("Home document not found");
  }

  return home;
}

export async function getPosts(): Promise<Post[]> {
  return await sanityClient.fetch(postsQuery);
}

export async function getPost(slug: string): Promise<Post> {
  return await sanityClient.fetch(postQuery, {
    slug,
  });
}
