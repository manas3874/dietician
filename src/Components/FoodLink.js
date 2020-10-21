import React from "react";
import Axios from "axios";
var FoodLink = (props) => {
  var imageLink = () => {
    var imglink;
    Axios.get(
      // `https://api.edamam.com/search?q=${query}&q=tomato&app_id=${appId}&app_key=${appKey}`
      `https://5f908bdce0559c0016ad6a41.mockapi.io/dietician/api/Dataset`
    ).then((response) => {
      imglink = response.data.map((item) => item.image);
      console.log(imglink);
      
    });
    console.log(imglink);
    // Axios.get(imglink[0]).then((response) => {
    //   console.log(response);
    // });
  };
  imageLink();
  var fetchData = () => {
    // let query = "potato";
    // let appId = "a21fa717";
    // let appKey = "5ebe583aa60117600d289e1a50a94839";
    Axios.get(
      // `https://api.edamam.com/search?q=${query}&q=tomato&app_id=${appId}&app_key=${appKey}`
      `https://5f908bdce0559c0016ad6a41.mockapi.io/dietician/api/Dataset`
    ).then((response) => {
      console.log(response.data[props.attr - 1]);
    });
  };
  return (
    <div className="food-link">
      <p onClick={fetchData}>Button text {props.attr}</p>
    </div>
  );
};

export default FoodLink;
