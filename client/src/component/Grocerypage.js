import React, { useEffect, useState } from "react";
import Container_page from "./Container_page";
import axios from "axios";

const Grocerypage = () => {
  
  const [title, setTitle] = useState("")
  const [api_data, setApi_data] = useState([]);
  const [my_month, setmymonth] = useState("")


  const get_data = async () => {
    
      const getData = {groceryItem: title, ispurchased: false};
      await axios.post(process.env.REACT_APP_POST_API , JSON.stringify(getData), {
          headers: {
              'Content-Type': 'application/json'
          }
      })
  }

  const fetch_data = async () => {
    const response = await axios.get(process.env.REACT_APP_GET_API);
    console.log(response.data);
    setApi_data(response.data);
  };

  const myMonth = () => {
    const myTime = new Date();
    let month_Name = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August', 'September',
      'October', 'November', 'December'
    ];
    const myMonth = myTime.getMonth();
    setmymonth(month_Name[myMonth]);
  }
 
  useEffect(() => {
    fetch_data();
    myMonth();
  }, []);



  return (
    <form>
      <div>
        <div
          className="d-flex flex-column align-items-center card mt-5 mx-auto shadow pb-3"
          style={{ width: "80%", minHeight: "600px" }}
        >
          <h1
            className=" p-2 mb-2 bg-info text-dark text-center"
            style={{ width: "50%" }}
          >
            Monthly Grocery Planning App
          </h1>
          <h3 className="mt-5 pt-5"> Plan for the month {my_month} </h3>
          <div className="mb-3 mt-4">
            <input className="form-control fs-5" type="text"  style={{ width: "500px" }} onChange={(e) => setTitle(e.target.value)} 
            />
            <button style={{opacity: "0"}} onClick={get_data}>
              submit
            </button>
          </div>
          {api_data.map((api, index) => (
          <Container_page key ={index} groceryItem={api.groceryItem} id={api._id} api={api_data}  />
        ))}
        
        </div>
        
      </div>
    </form>
  );
};

export default Grocerypage;
