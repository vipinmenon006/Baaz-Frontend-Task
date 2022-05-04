import React from "react";
import Carousel from "./Components/Carousel/Carousel";
import Top from "./Components/Mob-Top/Top";
import Card from "./Components/Card/Card";
import "./Components/Card/card.css";
import data from "./Components/Card/data";
import Bottom from "./Components/Mob-Bottom/Bottom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const cards = data.map((data) => {
    return <Card {...data} />;
  });
  return (
    <div className="App">
      <Top />
      <Carousel />
      <section className="card-main" key={data.id}>
        <h1 className="card-header">Popular</h1>
        {cards}
      </section>
      <Navbar />
      <Bottom />
    </div>
  );
}

export default App;
