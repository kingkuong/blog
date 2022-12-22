import { sanityClient } from "../../lib/sanity";
import { PortableText } from "@portabletext/react";

const PostPage = ({ post }) => {
  return (
    <article>
      <h1>{post?.title}</h1>
      <PortableText value={post?.content} />
    </article>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)]{
        "params": {
            "slug": slug.current
        }
    }`
  );

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = await sanityClient.fetch(
    `*[_type == "post" && slug == $slug][0]`,
    { slug }
  );
  return {
    props: {
      post,
    },
  };
}
