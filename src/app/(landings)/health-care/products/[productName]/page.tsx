import React from "react";

const ProductDetails = ({ params }: { params: { productName: string } }) => {
  return <div>Product Details {params.productName}</div>;
};

export default ProductDetails;
