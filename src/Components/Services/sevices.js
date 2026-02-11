import Cards from "./cards";
import "./services.css";

function Services() {
  let cardsItem = [
    {
      icon: "bi bi-cone-striped",
      title: "Running shoes",
    },
    {
      icon: "bi bi-arrow-through-heart",
      title: "Football match",
    },
    {
      icon: "bi bi-balloon-fill",
      title: "Ball",
    },
    {
      icon: "bi bi-suitcase-lg",
      title: "Outfit",
    },
    {
      icon: "bi bi-sunglasses",
      title: "Sunglasses",
    },
    {
      icon: "bi bi-mortarboard",
      title: "cap",
    },
  ];

  return (
    <section id="services">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">SERVICES</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
          {cardsItem.map((card, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <Cards {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
