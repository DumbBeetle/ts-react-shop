import React from "react";
import { useParams } from "react-router-dom";
import useProductFetch from "../hooks/useProductFetch";
import NotFound from "./NotFound";
import Loading from "../components/Loading/Loading";
import { FetchedData } from "../interfece/ProductInterface";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useProductFetch(id);
  if (isLoading) {
    return <Loading />;
  }
  if (error || data === undefined) {
    return <NotFound />;
  }
  const {
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count },
  }: FetchedData = data;
  return (
    <div className="product-page">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-table">
        <div>
          <h2>Product Name:</h2>
          <p>{title}</p>
        </div>
        <div>
          <h2>Product Description:</h2>
          <p>{description}</p>
        </div>
        <div>
          <h2>Product Price:</h2>
          <p>${price}</p>
        </div>
        <div>
          <h2>Product Category:</h2>
          <p>{category}</p>
        </div>
        <div>
          <h2>Product Rating:</h2>
          <p>
            Rate: {rate} Count: {count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
