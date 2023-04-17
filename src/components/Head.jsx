import PropTypes from "prop-types";

export const Head = ({ clas, id }) => {
  return (
    <p className={clas} id={id}>
      I am a Head
    </p>
  );
};

Head.propTypes = {
  clas: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
