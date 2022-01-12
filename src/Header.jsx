import PropTypes from 'prop-types';

const Header = ({ text }) => {
  return <header className="header">{text}</header>;
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
