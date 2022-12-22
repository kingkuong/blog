import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "ooc3m5ke",
  dataset: "production",
  apiVersion: "2022-12-21",
  useCdn: process.env.NODE_ENV === "production" ? true : false,
});
