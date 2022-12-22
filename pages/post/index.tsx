import { sanityClient } from "../";
const PostPage = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <>
            <strong>{post.slug}</strong>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </>
        );
      })}
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
export default PostPage;
