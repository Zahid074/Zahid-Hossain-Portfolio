import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}

/**
 * Converts any image field coming from Sanity (or a plain string URL,
 * for safety) into a usable <img src> string. Use this everywhere an
 * "image" type field from the Sanity schema is rendered.
 */
export function imageSrc(source) {
  if (!source) return "";
  if (typeof source === "string") return source;
  try {
    return urlFor(source).url();
  } catch (e) {
    return "";
  }
}