import Meal from "./Meal";

const Category = ({ category, setBasket, basket }) => {
  return (
    <div>
      <h2>{category.name}</h2>
      <div className="block-category">
        {/* // on fait une boucle dans une boucle car meals est un tableau */}

        {category.meals.map((meal) => {
          // console.log("ici le log=>>>", category.meal);
          return (
            <Meal
              meal={meal}
              key={meal.id}
              setBasket={setBasket}
              basket={basket}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
