import React, { Component } from "react";
import Axios from "axios";
// import { Component } from "react";

// // ! using a function
// var FoodLink = (props) => {
//   const [imglink, setImgLink] = useState([]);
//   useEffect(() => {
//     var imglink;
//     Axios.get(
//       // `https://api.edamam.com/search?q=${query}&q=tomato&app_id=${appId}&app_key=${appKey}`
//       `https://5f908bdce0559c0016ad6a41.mockapi.io/dietician/api/Dataset`
//     ).then((response) => {
//       imglink = response.data.map((item) => item.image);
//       // console.log(imglink);
//       setImgLink(imglink);
//     });
//   });
//   const [foodData, setFoodData] = useState([]);
//   // foodData = 0;
//   var fetchData = () => {
//     // let query = "potato";
//     // let appId = "a21fa717";
//     // let appKey = "5ebe583aa60117600d289e1a50a94839";
//     var foodData1;
//     Axios.get(
//       // `https://api.edamam.com/search?q=${query}&q=tomato&app_id=${appId}&app_key=${appKey}`
//       `https://5f908bdce0559c0016ad6a41.mockapi.io/dietician/api/Dataset`
//     ).then((response) => {
//       foodData1 = response.data[props.attr - 1];
//       setFoodData(foodData1);
//       console.log(foodData1);
//     });
//   };
//   console.log(foodData);
//   // setTimeout(() => {
//   //   console.log(foodData);
//   // }, 500);

//   return (
//     <div
//       className="food-link"
//       style={{
//         backgroundImage: `url(${imglink[props.attr]})`,
//         objectFit: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <p onClick={() => fetchData()}>{props.name}</p>
//     </div>
//   );
// };

// //! using a class

class FoodLink extends Component {
  state = { dataset: [], images: [] };

  componentDidMount() {
    Axios.get(
      // `https://api.edamam.com/search?q=${query}&q=tomato&app_id=${appId}&app_key=${appKey}`
      `https://5f908bdce0559c0016ad6a41.mockapi.io/dietician/api/Dataset`
    ).then((response) => {
      console.log(response.data);
      let images = response.data.map((item) => {
        return item.image;
      });

      this.setState({ dataset: response.data, images: images });
    });
  }

  render() {
    return (
      <div
        className="food-link"
        style={{
          backgroundImage: `url(${this.state.images[this.props.attr]})`,
          objectFit: "cover",
          backgroundPosition: "center",
        }}
      >
        <p>
          Button text {this.props.attr} {console.log(this.state.images)}
        </p>
      </div>
    );
  }
}
export default FoodLink;
