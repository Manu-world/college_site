import "./Title.css";
import PropTypes from "prop-types";

const Title = ({ subTitile, title }) => {
  return (
    <div className="title">
      <p>{subTitile}</p>
      <h2>{title}</h2>
    </div>
  );
};

Title.propTypes = {
  subTitile: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Title;
