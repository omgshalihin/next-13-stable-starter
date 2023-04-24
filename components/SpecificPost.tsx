import getSpecificPost from "@/lib/data/getSpecificPost";
import { useRouter } from "next/router";
import Head from "next/head";

type Post = {
  id: number;
  email: string;
  name: string;
};

const SpecificPost = () => {
  const router = useRouter();
  const id: any = router.query.id;
  const { post, isError, isLoading } = getSpecificPost(id);

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const userBlogPost: Post = post[0];

  return (
    <>
      <Head>
        <title>Post | {id}</title>
      </Head>
      <p>{userBlogPost.id}</p>
      <p>{userBlogPost.email}</p>
      <p>{userBlogPost.name}</p>
    </>
  );
};

export default SpecificPost;
