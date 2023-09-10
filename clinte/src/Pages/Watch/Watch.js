import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import './watch.css'

function Watch() {

  const [products, setProducts] = useState([]);
    
  useEffect(() => {
    console.log("whatch");
    fetchData();
  }, []);

  //using json file
  const fetchData = async () => {
    try {
      const response = await axios.get("/whatch.json");
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };
let order = 2;

  return (
    <div>
    <br /><br />
      <section className="internal-page-wrapper top-100">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold">Watch</div>
             <div className="brief-description">Which Apple Watch is right for you?
            </div> <br /><br /><br /><br />
            
          </div>
        </div>
        {products && products.map((product) => {
          let id = product.product_url;
          let title = product.product_name;
          let img = product.product_img;
          let Brief = product.product_brief_description;
          let StartPrice = product.starting_price;
          let PriceRange = product.price_range;
          let productPage = "/Mac/" + id;

          let order1 = 1;
          let order2 = 2;
          if (order !== 1) {
            order1 = 2;
            order2 = 1;
            order--;
          } else {
            order++;
          }

          let productDiv = (
            <div
              key={id}
              className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
            >
              <div  className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
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

              <div className={`col-sm-12 col-md-6 order-${order2}`}>
                <div className="prodict-image">
                  <img src={img} alt="" />
                </div>
              </div>
              <br /><br /><br /><br /><br />
            </div>
          );
          return productDiv;
        })}
      </div>
    </section>
  </div>
  )
}

export default Watch
