import groq from "groq";

export default groq`
*[_type == "post" && slug.current == $slug][0]
`;
