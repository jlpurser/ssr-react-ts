import { connect, ConnectedProps } from 'react-redux';
import { ServerStore } from '../../server/state/serverStore';
import UsersListScreen from '../screens/UsersListScreen';
import { AppState } from '../state/clientStore';
import { fetchUsers } from '../state/usersSlice';

function mapStateToProps(state: AppState) {
  return {
    users: state.users,
  };
}

// Curried connect function expecting component
const connectUsersList = connect(mapStateToProps, { fetchUsers });

// Connected Component
const UsersListContainer = connectUsersList(UsersListScreen);

// Connected Component inferred props
export type UsersListProps = ConnectedProps<typeof connectUsersList>;

// Export component with loadData for SSR
export default {
  component: UsersListContainer,
  loadData: (store: ServerStore) => {
    store.dispatch(fetchUsers());
  },
};
