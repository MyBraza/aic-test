import {IAppState} from '@store/types'
import {createSelector} from 'reselect'

const getUsers = (state: IAppState) => state.users;

const getRoles = (state: IAppState) => state.roles;

const getCurrentUser = (state: IAppState) => state.currentUser;

export const getUsersSelector = createSelector(getUsers, (users) => users);

export const getRolesSelector = createSelector(getRoles, (roles) => roles);

export const getCurrentUserSelector = createSelector(getCurrentUser, (user) => user);
