import React from "react";

const Products = ({ params }: { params: { storeId: string } }) => {
  return <div>Products list {params.storeId}</div>;
};

export default Products;
