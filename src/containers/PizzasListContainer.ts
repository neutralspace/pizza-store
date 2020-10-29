import { connect } from 'react-redux';
import PizzasList from '@components/PizzasList/PizzasList';
import { getPizzasList } from '../actions/pizzas';

const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas,
  }
};

export default connect(mapStateToProps, { getPizzasList })(PizzasList);
