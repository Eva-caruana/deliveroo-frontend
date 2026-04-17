import { useState } from "react";
import Hero from "../Hero/Hero";
import Menu from "../Menu/Menu";

const Main = ({ data }) => {
  const [basket, setBasket] = useState([]);
  return (
    <main>
      <Hero data={data.restaurant} />
      <Menu data={data.categories} basket={basket} setBasket={setBasket} />
    </main>
  );
};

export default Main;
