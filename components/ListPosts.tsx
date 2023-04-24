import getPosts from "@/lib/data/getPosts";
import Link from "next/link";

type Post = {
  id: number;
  email: string;
  name: string;
};

const ListPosts = () => {
  const { posts, isError, isLoading } = getPosts();

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      {posts.map((post: Post) => (
        <div key={post.id} className="mb-5">
          <Link href={`/posts/${post.id}`}>
            <p>{post.id}</p>
            <p>{post.email}</p>
            <p>{post.name}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ListPosts;
