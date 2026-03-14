import Hero from "./Hero";
import Menu from "./Menu";

const Main = ({ data }) => {
  return (
    <main>
      <Hero data={data.restaurant} />
      <Menu data={data.categories} />
    </main>
  );
};

export default Main;
