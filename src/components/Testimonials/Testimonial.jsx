import "./Testimonials.css";

const Testimonial = (item) => {
  return (
    <li>
      <div className="slide">
        <div className="user-info">
          <img src={item.avatar} alt="" />
          <div>
            <h3>{item.name}</h3>
            <span>{item.place}</span>
          </div>
        </div>
        <p>{item.comment}</p>
      </div>
    </li>
  );
};

export default Testimonial;
