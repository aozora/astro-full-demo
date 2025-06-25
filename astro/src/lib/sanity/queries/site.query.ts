import groq from "groq";
import { seo } from "@lib/sanity/queries/seo.query.ts";

export default groq`*[_type == "site"]{ 
  _id, 
  title, 
  ${seo}, 
  menu  
}`;
