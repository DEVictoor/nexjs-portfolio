import { useRouter } from "next/router";

export const Posts = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>;
};


