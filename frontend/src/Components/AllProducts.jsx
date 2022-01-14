import React, {useContext} from "react";
import { AuthContext } from "../Context/AuthProvider";

const AllProducts = () => {
  const { search, searchList } = useContext(AuthContext);
  return (
    <div className="container">
      <div className="title">Showing results for "{search}"</div>
      <div className="products">
        {searchList.map((object) => {
          return (
            <div className="card">
              <img className="photo"src={'http://127.0.0.1:8000'+object.image1}/>
              <div className="card-content">
                <strong>{typeof object.image1}</strong>
                <strong></strong>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
