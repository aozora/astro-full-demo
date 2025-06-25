import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "@sanity/types";
import { sanityClient } from "sanity:client";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: Image) {
  return builder.image(source);
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
