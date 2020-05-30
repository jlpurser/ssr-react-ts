import {
  Action,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';
import { AppState } from './clientStore';

type User = {
  id: string;
  name: string;
};

const initialState: User[] = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    receivedUsers: (_state, action: PayloadAction<User[]>) => action.payload,
  },
});

export default { reducer: usersSlice.reducer };

const { actions } = usersSlice;

type UsersThunk = ThunkAction<void, AppState, undefined, Action<string>>;

export const fetchUsers = (): UsersThunk => (dispatch) =>
  fetch('http://react-ssr-api.herokuapp.com/users')
    .then((data) => data.json())
    .then((users) => {
      dispatch(actions.receivedUsers(users));
    });
