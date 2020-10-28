import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
// import image-0 from "../../public/black-0.png";
// import image-1 from "../../public/black-1.png";
// import image-2 from "../../public/black-2.png";
// import image-3 from "../../public/black-3.png";
// //! using a class

class FoodLink extends Component {
  state = { dataset: [], images: [], titles: [], recipes: [] };

  fetchImages = async () => {
    await Axios.get(
      // `https://api.edamam.com/search?q=${query}&q=tomato&app_id=${appId}&app_key=${appKey}`
      `https://5f908bdce0559c0016ad6a41.mockapi.io/dietician/api/Dataset`
    ).then((response) => {
      console.log(response.data);
      let images = response.data.map((item) => {
        return item.image;
      });
      let titles = response.data.map((item) => {
        return item.title;
      });
      let recipes = response.data.map((item) => {
        return item.recipe;
      });
      this.setState({
        dataset: response.data,
        images: images,
        titles: titles,
        recipes: recipes,
      });
    });
  };
  componentDidMount() {
    this.fetchImages();
  }
  // imageSrc = () => {
  //   console.log(`image-${this.props.attr}`);
  //   return `image${this.props.attr}`;
  // };
  render() {
    return (
      <div
        className="food-link"
        // style={{
        //   backgroundImage: `url(${this.state.images[this.props.attr]})`,
        //   objectFit: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <img
          //! toggle between color/black for various icons
          src={require(`../../public/color-${this.props.attr}.png`)}
          alt=""
        />
        {/* <p>
          {this.state.titles[this.props.attr]} {console.log(this.state)}
        </p> */}
        <Link
          className="food-link--btn"
          to={{ pathname: `${this.state.recipes[this.props.attr]}` }}
          target="_blank"
        >
          {this.state.titles[this.props.attr]}
        </Link>
      </div>
    );
  }
}
export default FoodLink;
