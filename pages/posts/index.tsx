import Link from "next/link";
import { sanityClient } from "../../lib/sanity";
import { PortableText } from "@portabletext/react";

const PostsPage = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((post) => {
          return (
            <li>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const posts = await sanityClient.fetch('*[_type == "post"]');

  return {
    props: {
      posts,
    },
  };
}
export default PostsPage;
