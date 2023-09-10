import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios"


function Iphone() {
    const [products, setProducts] = useState([]);

    async function fetchData() {
      try {
        const { data }  = await axios.get("/Products.json");
        console.log(data);
        setProducts(data)
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
    fetchData()
      }, []);

      let flip = true
  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <div className="title-wraper bold">Iphones</div>
              <div className="brief-description mb-5">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products?.map((product) => {

            let order1 = 1;
            let order2 = 2;
            if (flip) {
              order1 = 2;
              order2 = 1;
              flip = !flip;
            } else {
                flip = !flip;
            }

            let productDiv = (
              <div
                key={product.product_url}
                className="row justify-content-center text-center product-holder h-100"
              >
                <div className={`col-sm-6 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{product.product_name}</div>
                  <div className="product-brief">{product.product_brief_description}</div>
                  <div className="starting-price">
                    {`Starting at ${product.starting_price}`}
                  </div>
                  <div className="monthly-price">{product.price_range}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={`/iphone/${product.product_url}`}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-6 col-md-6 order-${order2}`}>
                  <div className="prodict-image">
                    <img src={product.product_img} alt="" />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  )
}

export default Iphone




      // fetch(
		// 	"http://localhost:5600/products-detail-info"
		// )
		// 	.then((res) => res.json())
		// 	.then((data) => {
				
		// 		setProducts(data);
		// 	});