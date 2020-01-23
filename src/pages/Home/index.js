import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';
import Home from './Home';
import {
  getPopularRecipies,
  getVeganRecipies,
  getCheapRecipies,
  getHealthyRecipies,
  getVegetarianRecipies,
} from '../../store/selectors/recipiesSelector';
import {retrieveRecipies} from '../../store/actions/recipiesActions';

const mapStateToProps = state => ({
  recipies: state.recipies.recipies,
  loadingRecipies: state.recipies.loadingRecipies,
  veganRecipies: getVeganRecipies(state),
  popularRecipies: getPopularRecipies(state),
  cheapRecipies: getCheapRecipies(state),
  healthyRecipies: getHealthyRecipies(state),
  vegetarianRecipies: getVegetarianRecipies(state),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      retrieveRecipies,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Home));
