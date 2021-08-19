import { IAppState } from '@store/types'
import { createSelector } from 'reselect'

const getUsers = (state: IAppState) => state.users;

export const getUsersSelector = createSelector(getUsers, (users) => users);
