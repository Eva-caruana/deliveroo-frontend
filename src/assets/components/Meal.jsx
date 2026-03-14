import { IoMdStar } from "react-icons/io";

const Meal = ({ meal, setBasket, basket }) => {
  return (
    <div
      className="meal"
      onClick={() => {
        // console.log("ici le log=>>>", clicked !!);

        //1 copy tab
        const copy = [...basket];
        // 2 au moment de rajouter mon plat dans mon panier, je vérifie s'il n'est déjà dedans (avec l'id) :
        const alreadyExist = copy.find((element) => element.id === meal.id);
        // si le plat n'est pas déjà dans le panier :
        if (alreadyExist === undefined) {
          //je rajoute à celui-ci une clef quantité qui renvoie 1 :
          copy.push({ ...meal, quantity: 1 });
        } else {
          // sinon, je rajoute juste 1 à sa quantité :
          alreadyExist.quantity++;
        }
        // 3 :
        setBasket(copy);
      }}
    >
      <div className="aside">
        <h3>{meal.title}</h3>
        <p> {meal.description.slice(0, 60)}</p>
        <div className="price-popularity">
          <div className="meal-price">
            <p>{meal.price} €</p>
            {/* si l'element est populaire on l'affiche sinon on affiche pas  */}
          </div>
          <div className="popular">
            {meal.popular && (
              <p className="popular">
                <IoMdStar /> Populaire
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="meal-picture">
        {/* si on a une image on l'affiche sinon on affiche pas  */}
        {meal.picture ? <img src={meal.picture} alt="meal-picture" /> : ""}
      </div>
    </div>
  );
};

export default Meal;
