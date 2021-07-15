import React from "react";
import PropTypes from "prop-types";

function Apple({ name, picture, rating }) {
  console.log(name);
  return (
    <div>
      <h1>I like {name} !!</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}
Apple.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

const iPhoneList = [
  {
    id: 1,
    name: "iPad",
    image:
      "https://image.cnet.co.kr/2020/09/16/5ac9389cf55eaec00460033def8d0137-770xAAA.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "AppleWatch",
    image:
      "https://image.zdnet.co.kr/2020/09/16/b95bb43226c7817993b1acc6383d7dbc.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "MacBook",
    image:
      "https://blog.kakaocdn.net/dn/cbBCEr/btqH4tmFDey/xZqIQbKQPxkTSFZdbzBbnk/img.jpg",
    rating: 4.8,
  },
  {
    id: 4,
    name: "iPhone",
    image:
      "https://support.apple.com/library/content/dam/edam/applecare/images/ko_KR/iOS/ios14-iphone-11pro-setup-hello-select-language.jpg",
    rating: 4.7,
  },
  {
    id: 5,
    name: "AirPods",
    image:
      "https://funshop1.akamaized.net/products/0000076114/637099241290463260.jpg",
    rating: 5.5,
  },
];
function App() {
  return (
    <div>
      {iPhoneList.map((item) => (
        <Apple
          key={item.id}
          name={item.name}
          picture={item.image}
          rating={item.rating}
        />
      ))}
    </div>
  );
}

export default App;
