import ListPosts from "@/components/ListPosts";
import Link from "next/link";
import Head from "next/head";

const Posts = () => {
  return (
    <>
      <Head>
        <title>Blog Posts</title>
      </Head>
      <ListPosts />
    </>
  );
};

export default Posts;
