import './App.css';
import Header from './Component/Header';
import Offers from "./Component/Offers";
import Restaurants from './Component/Restaurants';
import offerimg from "./Resourses/offer.jpg";
import pizza from "./Resourses/pizza.webp";
import thai from "./Resourses/thai.jpg";
import sushi from "./Resourses/sushi.jpg";
import asian from "./Resourses/asian.png";
import italian from "./Resourses/italian.jpg";
import libanese from "./Resourses/libanese.jpg";
import chinese from "./Resourses/chinese.jpg";
import burger from "./Resourses/burger.webp";
import dessert from "./Resourses/dessert.jpg";

function App() {
  const offerArray = [
    {
      ImgURL: offerimg,
      label: "Offer"
    },
    {
      ImgURL: pizza,
      label: "Pizza"
    },
    {
      ImgURL: thai,
      label: "Thai"
    },
    {
      ImgURL: sushi,
      label: "Sushi"
    },
    {
      ImgURL: asian,
      label: "Asian"
    },
    {
      ImgURL: italian,
      label: "Italian"
    },
    {
      ImgURL: libanese,
      label: "Libanese"
    },
    {
      ImgURL: chinese,
      label: "Chinese"
    },
    {
      ImgURL: burger,
      label: "Burger"
    },
    {
      ImgURL: dessert,
      label: "Dessert"
    },
    {
      ImgURL: pizza,
      label: "Pizza"
    },
    {
      ImgURL: thai,
      label: "Thai"
    },
    {
      ImgURL: sushi,
      label: "Sushi"
    },
    {
      ImgURL: asian,
      label: "Asian"
    },
    {
      ImgURL: italian,
      label: "Italian"
    },
    {
      ImgURL: libanese,
      label: "Libanese"
    },
    {
      ImgURL: chinese,
      label: "Chinese"
    },
    {
      ImgURL: burger,
      label: "Burger"
    },
    {
      ImgURL: dessert,
      label: "Dessert"
    },
  ]
  const restoArray1 = [
    {
      ImgURL: pizza,
      restoName: "Domino's",
      rating: "4.8",
      location: "Pune",
    },
    {
      ImgURL: burger,
      restoName: "KFC",
      rating: "4.5",
      location: "Pune",
    },
    {
      ImgURL: chinese,
      restoName: "Yo!Sushi",
      rating: "4.0",
      location: "Pune",
    },
    {
      ImgURL: italian,
      restoName: "Pizza Hut",
      rating: "4.8",
      location: "Pune",
    },
    {
      ImgURL: dessert,
      restoName: "Nando's",
      rating: "4.8",
      location: "Pune",
    },
  ]
  const restoArray2 = [
    {
      ImgURL: italian,
      restoName: "Pizza Hut",
      rating: "4.8",
      location: "Pune",
    },
    {
      ImgURL: burger,
      restoName: "KFC",
      rating: "4.5",
      location: "Pune",
    },
    {
      ImgURL: pizza,
      restoName: "Domino's",
      rating: "4.8",
      location: "Pune",
    },
    {
      ImgURL: chinese,
      restoName: "Yo!Sushi",
      rating: "4.0",
      location: "Pune",
    },

    {
      ImgURL: dessert,
      restoName: "Nando's",
      rating: "4.8",
      location: "Pune",
    },
  ]
  const restoArray3 = [
    {
      ImgURL: italian,
      restoName: "Pizza Hut",
      rating: "4.8",
      location: "Pune",
    },

    {
      ImgURL: pizza,
      restoName: "Domino's",
      rating: "4.8",
      location: "Pune",
    },
    {
      ImgURL: chinese,
      restoName: "Yo!Sushi",
      rating: "4.0",
      location: "Pune",
    },
    {
      ImgURL: italian,
      restoName: "Pizza Hut",
      rating: "4.8",
      location: "Pune",
    },
    {
      ImgURL: dessert,
      restoName: "Nando's",
      rating: "4.8",
      location: "Pune",
    },


  ]
  const diffRestoArray = [
    {
      title: "Offers near you!",
      description: "Why not support your local restaurants tonight!",
      subArr: restoArray1,
    },
    {
      title: "Featured",
      description: "Paid placement from our partners",
      subArr: restoArray2,
    },
    {
      title: "Tasty Discounts",
      description: "Every one is enjoying",
      subArr: restoArray3,
    },
  ]
  return (
    <div className="App">
      <Header />
      <Offers card={offerArray} />
      {
        diffRestoArray.map((item, index) => {
          return <Restaurants key={index} item={item} />
        })
      }

    </div>
  );
}

export default App;
