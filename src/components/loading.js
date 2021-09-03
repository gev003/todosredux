import { useSelector } from "react-redux";

const Loading = () => {
  const loading = useSelector((state) => state.loading);

  return <>{loading.isLoading && <h2>Loading...</h2>}</>;
};

export default Loading;
