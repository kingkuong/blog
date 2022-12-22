import { sanityClient } from "../";
const PostPage = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <>
            <strong>{post.slug}</strong>
            <h1>{post.title}</h1>
            <div>{post.content}</div>
          </>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  const posts = await sanityClient.fetch('*[_type == "post"]');

  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}
export default PostPage;
