import "./Menu.css";
import Basket from "../Basket/Basket";
import Category from "../Category/Category";

const Menu = ({ data, basket, setBasket }) => {
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

          <Basket basket={basket} setBasket={setBasket} />
        </section>
      </div>
    </div>
  );
};

export default Menu;
