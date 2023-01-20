import { useGetProductsQuery } from "../src/features/api/slice";

function App() {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return (
      <>
        <h1>It is loading</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>{JSON.stringify(data)}</h1>
      </>
    );
  }
}

export default App;
