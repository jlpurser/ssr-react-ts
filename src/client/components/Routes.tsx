import UsersListContainer from '../containers/UsersListContainer';
import HomeScreen from '../screens/HomeScreen';

export default [
  {
    ...HomeScreen,
    path: '/',
    exact: true,
  },
  {
    ...UsersListContainer,
    path: '/users',
  },
];
