import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const getSpecificPost = (id: number) => {
  const userId: number = 1;
  const serverDomainUrl: string = "https://jsonplaceholder.typicode.com";

  const url: string = `${serverDomainUrl}/comments?postId=${userId}&id=${id}`;

  const { data, error, isLoading } = useSWR(url, fetcher);

  return { post: data, isError: error, isLoading: isLoading };
};

export default getSpecificPost;
