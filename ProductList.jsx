function ProductList() {
  const products = [
    { id: 1, name: "Plant 1" },
    { id: 2, name: "Plant 2" }
  ];

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
}

export default ProductList;
