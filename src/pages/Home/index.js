import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Home from './Home';
import {retrieveRecipies, retrieveMoreRecipies} from '../../store/actions/recipiesActions';

const mapStateToProps = state => ({
  recipies: state.recipies.recipies,
  loadingRecipies: state.recipies.loadingRecipies,
  loadingMoreRecipies: state.recipies.loadingMoreRecipies,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      retrieveRecipies,
      retrieveMoreRecipies,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
