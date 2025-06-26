import { sanityClient } from "sanity:client";
import type { PortableTextBlock } from "@portabletext/types";
import groq from "groq";
import siteQuery from "@lib/sanity/queries/site.query.ts";
import homeQuery from "@lib/sanity/queries/home.query.ts";
import type { Home, Post, Site } from "@lib/sanity/types.ts";

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

export async function getPosts(): Promise<Post[]> {
  return await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`,
  );
}

export async function getPost(slug: string): Promise<Post> {
  return await sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]`,
    {
      slug,
    },
  );
}
