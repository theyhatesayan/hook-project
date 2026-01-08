import useFetch from "./Hooks/useFetch";

function App() {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
    return <h2 className="center">Loading...</h2>;
  }

  if (error) {
    return <h2 className="center">Error: {error}</h2>;
  }

  return (
    <div className="container">
      <h1>Task 5 : React Custom Hooks</h1>

      <div className="grid">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.images[0]} alt={item.title} />
            <h3>{item.title}</h3>
            <p>₹ {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
