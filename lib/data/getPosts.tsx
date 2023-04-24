import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const getPosts = () => {
  const userId: number = 1;
  const serverDomainUrl = "https://jsonplaceholder.typicode.com";

  const url: string = `${serverDomainUrl}/comments?postId=${userId}`;

  const { data, error, isLoading } = useSWR(url, fetcher);

  return { posts: data, isError: error, isLoading: isLoading };
};

export default getPosts;
