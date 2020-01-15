import Pages from '../enum/Pages';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Article from '../pages/Article';

const routes = {
  Home: {id: Pages.HOME, screen: Home},
  Search: {id: Pages.SEARCH, screen: Search},
  Article: {id: Pages.ARTICLE, screen: Article},
};

export default routes;
