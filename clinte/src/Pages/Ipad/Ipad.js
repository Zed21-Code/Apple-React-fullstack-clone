import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './ipad.css';
import axios from 'axios';
const server = process.env.REACT_APP_SERVER;

function Ipad() {

  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState(2);

  useEffect(() => {
    console.log("IPad");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/ipad.json");
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div>
      <br />
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">iPads</div>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="order-wrapper">
                <label htmlFor="order-select">Final Cut Pro and Logic Pro for iPad</label>
                
              </div>
            </div>
          </div>
          {products && products.map((product) => {
            let id = product.product_url;
            let title = product.product_name;
            let img = product.product_img;
            let Brief = product.product_brief_description;
            let StartPrice = product.starting_price;
            let PriceRange = product.price_range;
            let productPage = "/iPad/" + id;

            return (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div className="col-sm-12 col-md-6 my-auto">
                  <div className="product-title">{title}</div>
                  <div className="product-brief">{Brief}</div>
                  <div className="starting-price">
                    {`Starting at ${StartPrice}`}
                  </div>
                  <div className="monthly-price">{PriceRange}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={productPage}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="product-image">
                    <img src={img} alt="" />
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

export default Ipad
