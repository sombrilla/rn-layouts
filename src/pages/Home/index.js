import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Home from './Home';
import {retrieveRecipies} from '../../store/actions/recipiesActions';

const mapStateToProps = state => ({
  recipies: state.recipies.recipies,
  loadingRecipies: state.recipies.loadingRecipies,
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
)(Home);
