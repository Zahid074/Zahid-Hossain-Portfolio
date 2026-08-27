import { client } from "./sanity";

/**
 * DATA ACCESS LAYER
 * Fetching data directly from Sanity Headless CMS
 */
export async function getContent() {
  try {
    const data = await client.fetch(
      `*[_type == "siteContent"][0]`,
      {},
      { cache: "no-store" }
    );
    return data || {};
  } catch (error) {
    console.error("Error fetching data from Sanity:", error.message, error);
    return {};
  }
}

export function hasContent(section) {
  if (!section) return false;
  if (Array.isArray(section)) return section.length > 0;
  if (typeof section === "object") {
    if ("items" in section) return Array.isArray(section.items) && section.items.length > 0;
    return Object.keys(section).length > 0;
  }
  if (typeof section === "string") return section.trim().length > 0;
  return Boolean(section);
}