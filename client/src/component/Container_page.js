import axios from "axios";
import React, { useState}  from "react";

const Container_page = ({ groceryItem, id }) => {
  const[cut_line, setCut_line] = useState(true)
  

const delete_Data = async (e) => {
  e.preventDefault();
  await axios.delete(process.env.REACT_APP_DELETE_API)
 
}

const update_data = async (e) => {
  e.preventDefault();
  setCut_line(false)
  await axios.put(process.env.REACT_APP_UPDATE_API)
}



  return (
    <div>
      <div
          className=" shadow  bg-body rounded " 
          style={{ width: "500px" }}
        >
          <div>
            <div className="p-2 mb-2" >
            <h4 className={!cut_line  ? " text-decoration-line-through" : "text-decoration-none "  } >
          {groceryItem}
          </h4>
            </div>
          
            <i onClick={delete_Data} 
            className="fas fa-trash  position-absolute cursor-pointer  " 
              style={{marginLeft: "470px", marginTop: "-46px", fontSize: "23px", cursor: "pointer"}}
              ></i>
          
            <button
                className="btn btn-dark position-absolute  " 
                style={{marginLeft: "350px", marginTop: "-54px", }}
                onClick={update_data}
            >
                Purchased
              </button>
              
          </div>
        </div>
    </div>
  );
};

export default Container_page;
