import Pages from '../enum/Pages';
import Home from '../pages/Home';
import More from '../pages/More';

const routes = {
  Home: {id: Pages.HOME, screen: Home},
  More: {id: Pages.MORE, screen: More},
};

export default routes;
