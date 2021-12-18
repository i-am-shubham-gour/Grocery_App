import axios from "axios";
import React, {useEffect, useState}  from "react";

const Container_page = ({ groceryItem, id, }) => {
  

const delete_Data = async (id) => {
  await axios.delete(`http://localhost:4321/Grocery/deleteGroceryItem/${id}`)
 
}

const update_data = async (id) => {
  
  await axios.put(`http://localhost:4321/Grocery/updateGroceryItem/${id}`)
}



  return (
    <div>
      <div
          className=" shadow  bg-body rounded " 
          style={{ width: "500px" }}
        >
          <div>
            <h4 className="p-3 ">
              
              {groceryItem}
             
             
              
              
            </h4>
            <i onClick={()=> delete_Data(id)} 
            className="fas fa-trash  position-absolute cursor-pointer  " 
              style={{marginLeft: "470px", marginTop: "-48px", fontSize: "23px", cursor: "pointer"}}
              ></i>
          
            <button
                className="btn btn-dark position-absolute  "
                style={{marginLeft: "350px", marginTop: "-57px"}}
                onClick={()=> update_data(id)}
                
              >
                Purchased
              </button>
              
          </div>
        </div>
    </div>
  );
};

export default Container_page;
