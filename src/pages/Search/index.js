import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Search from './Search';
import {searchRecipies} from '../../store/actions/recipiesActions';

const mapStateToProps = state => ({
  recipiesResults: state.recipies.recipiesResults,
  loadingSearchRecipies: state.recipies.loadingSearchRecipies,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      searchRecipies,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
