import Basket from "./Basket";
import Category from "./Category";
import { useState } from "react";

const Menu = ({ data }) => {
  const [basket, setBasket] = useState([]);

  // data => data.categories originel !

  return (
    <div className="food-payment-category">
      <div className="container">
        <section className="food-category">
          <div>
            {data.map((category, index) => {
              return (
                category.meals.length > 0 && (
                  <Category
                    category={category}
                    key={category.name + index}
                    setBasket={setBasket}
                    basket={basket}
                  />
                )
              );
            })}
          </div>

          <div>
            <Basket basket={basket} setBasket={setBasket} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu;
