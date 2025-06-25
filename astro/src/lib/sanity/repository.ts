import { sanityClient } from "sanity:client";
import type { PortableTextBlock } from "@portabletext/types";
import groq from "groq";
import siteQuery from "@lib/sanity/queries/site.query.ts";
import homeQuery from "@lib/sanity/queries/home.query.ts";
import type { Home, Post, Site } from "@lib/sanity/types.ts";

export async function getSite(): Promise<Site> {
  return await sanityClient.fetch<Site>(siteQuery);
}

export async function getHome(): Promise<Home> {
  return await sanityClient.fetch(homeQuery);
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
