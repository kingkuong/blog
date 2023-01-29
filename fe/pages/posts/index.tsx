import { useEffect } from "react";
import Link from "next/link";
import { sanityClient } from "../../lib/sanity";
import { Post } from "../../models";
import { Template } from "../../components";

const PostsPage = ({ posts }: { posts: Post[] }) => {
  return (
    <Template>
      <ul>
        {posts?.map((post) => {
          return (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </Template>
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
