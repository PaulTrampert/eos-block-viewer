import PropTypes from 'prop-types';
import Action from './Action';

export default PropTypes.shape({
  actions: PropTypes.arrayOf(Action)
});