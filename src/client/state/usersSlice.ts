import {
  Action,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';
import { ClientStore } from './createClientStore';

type Users = string[];

const initialState: Users = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    receivedUsers: (state, action: PayloadAction<string[]>) => action.payload,
  },
});

export default { reducer: usersSlice.reducer };

const { actions } = usersSlice;

type UsersThunk = ThunkAction<void, ClientStore, undefined, Action<string>>;

export const fetchUsers = (): UsersThunk => (dispatch) => {
  fetch('http://react-ssr-api.herokuapp.com/users')
    .then((data) => data.json())
    .then((users) => {
      dispatch(actions.receivedUsers(users));
    });
};
