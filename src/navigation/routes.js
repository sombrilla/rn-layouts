import Pages from '../enum/Pages';
import Home from '../pages/Home';
import More from '../pages/More';
import Article from '../pages/Article';

const routes = {
  Home: {id: Pages.HOME, screen: Home},
  More: {id: Pages.MORE, screen: More},
  Article: {id: Pages.ARTICLE, screen: Article},
};

export default routes;
