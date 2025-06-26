import groq from "groq";
import { seo } from "@lib/sanity/queries/seo.query.ts";
export default groq`
*[_type == "home"][0]{ 
  _id, 
  ${seo}, 
  title, 
  slug,   
  blocks[]{
      _type == "hero" => {
        _type,
        title,
        picture,
        videoYoutube
      },
    _type == "quote" => {
        _type,
        quote
      },
    _type == "textAndMedium" => {
        _type,
        text,
          alignment,
          picture
      }
    },
}
`;
