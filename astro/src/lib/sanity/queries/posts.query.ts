import groq from "groq";

export default groq`
*[_type == "post" && defined(slug.current)] | order(_createdAt desc)
`;
