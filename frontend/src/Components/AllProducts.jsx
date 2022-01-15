import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import * as p from "./CSS/allProducts.module.css";
import { FaRupeeSign } from "react-icons/fa";
import {useHistory} from 'react-router-dom'

const AllProducts = () => {
  const { search, searchList } = useContext(AuthContext);
  const history = useHistory()
  function onsubmit(e){
    history.push("/shop/product");
  }
  return (
    <div className={p["container"]}>
      <div className={p["title"]}>Showing results for "{search}"</div>
      <div className={p["line"]}></div>
      <div className={p["products"]}>
        {searchList.map((object) => {
          return (
            <div className={p.card} onClick={onsubmit}>
              <img
                className={p["photo"]}
                src={"http://127.0.0.1:8000" + object.image1}
              />
              <div className="card-content">
                <strong>
                  {object.productName
                    .substring(0, 26)
                    .concat(
                      object.productName.substring(
                        26,
                        object.productName.length
                      ).length > 0
                        ? "..."
                        : ""
                    )}
                </strong>
                <div className={p["price"]}>
                  <span
                    style={{
                      fontSize: "1.2rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "black",
                    }}
                  >
                    <FaRupeeSign />
                    {object.discountPrice}&nbsp;
                  </span>
                  <span
                    className={p["cut-price"]}
                    style={{
                      fontSize: "0.8rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "3px",
                      color: "grey",
                    }}
                  >
                    <FaRupeeSign />
                    {object.sellingPrice}&nbsp;
                  </span>
                  <span style={{ padding: "1px", color: "green", fontSize: "1rem" }}>
                    {((object.sellingPrice - object.discountPrice) * 100) /
                      object.sellingPrice}
                    %off
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
