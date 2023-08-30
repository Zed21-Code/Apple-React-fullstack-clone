import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"


function Products() {
    const [product, setProduct] = useState([]);

    const { productID } = useParams()

    async function fetchData() {
      try {
        const { data }  = await axios.get("/Products.json");
        console.log(data);
        const singleProduct = data.filter(
            (product) => product.product_url===productID
        )
        setProduct(singleProduct)
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
    fetchData()
      }, [productID]);
  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
            <h1>{productID}</h1>
          
          {product?.map((product) => {

            

            return (
                <div key={product.product_url}>
                    <div className="row justify-content-center text-center">
                        <div className="col-12 mt-5 pt-5">
                            <div className="title-wraper font-weight-bold">
                            {product.product_name}
                            </div>
                            <div className="brief-description">
                            {product.product_brief_description}
                            </div>
                        </div>
                    </div>
                    <div
                        className="row justify-content-center text-center product-holder h-100">
                        <div className="col-sm-12 col-md-6 my-auto">
                            <div className="starting-price">
                                {`Starting at ${product.starting_price}`}
                            </div>
                            <div className="monthly-price">{product.price_range}</div>
                            <div className="product-details">{product.product_description}</div>
                        </div>

                        <div className={`col-sm-12 col-md-6`}>
                        <div className="prodict-image">
                            <img src={product.product_img} alt="" />
                        </div>
                        </div>
                    </div>
                </div>
              
            );
            
          })}
        </div>
      </section>
    </div>
  )
}

export default Products
