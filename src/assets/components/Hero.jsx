const Hero = ({ data }) => {
  // data => c'est le data.restaurant originel
  return (
    <section className="restaurant-info">
      <div className="container">
        <div className="restaurant-info-bloc">
          <div className="text-info">
            <h1>{data.name}</h1>
            <p>{data.description}</p>
          </div>

          <div className="restaurant-info-picture">
            <img src={data.picture} alt="food-picture" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
