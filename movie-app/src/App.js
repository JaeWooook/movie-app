import React from "react";

function Apple({ name, picture }) {
  console.log(name);
  return (
    <div>
      <h1>I like {name} !!</h1>
      <img src={picture} alt="profile" />
    </div>
  );
}
const iPhoneList = [
  {
    name: "iPad",
    image:
      "https://image.cnet.co.kr/2020/09/16/5ac9389cf55eaec00460033def8d0137-770xAAA.jpg",
  },
  {
    name: "AppleWatch",
    image:
      "https://image.zdnet.co.kr/2020/09/16/b95bb43226c7817993b1acc6383d7dbc.jpg",
  },
  {
    name: "MacBook",
    image:
      "https://blog.kakaocdn.net/dn/cbBCEr/btqH4tmFDey/xZqIQbKQPxkTSFZdbzBbnk/img.jpg",
  },
  {
    name: "iPhone",
    image:
      "https://support.apple.com/library/content/dam/edam/applecare/images/ko_KR/iOS/ios14-iphone-11pro-setup-hello-select-language.jpg",
  },
  {
    name: "AirPods",
    image:
      "https://funshop1.akamaized.net/products/0000076114/637099241290463260.jpg",
  },
];
function App() {
  return (
    <div>
      {iPhoneList.map((item) => (
        <Apple name={item.name} picture={item.image}></Apple>
      ))}
    </div>
  );
}

export default App;
