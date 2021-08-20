import {
  ADD_USER,
  SAVE_ROLES,
  SAVE_USER_DATA,
  SET_CURRENT_USER,
  UPDATE_USER_BY_ID
} from '@store/actionTypes'
import {
  IAddUserPayload,
  IAppThunk,
  ISaveRolesPayload,
  ISaveUserDataPayload,
  ISetCurrentUserPayload,
  IUpdateUser,
  TAddUser,
  TSaveRoles,
  TSaveUserData,
  TSetCurrentUser,
  TUpdateUser
} from "@store/types";
import {getAxiosInstance} from "../api";
import {IUserRequestBody} from "../interfaces";

export const saveUserData = (
  payload: ISaveUserDataPayload
): TSaveUserData => ({
  type: SAVE_USER_DATA,
  payload
});

export const addUser = (
  payload: IAddUserPayload
): TAddUser => ({
  type: ADD_USER,
  payload
});

export const saveRoles = (
  payload: ISaveRolesPayload
): TSaveRoles => ({
  type: SAVE_ROLES,
  payload
});

export const setCurrentUser = (
  payload: ISetCurrentUserPayload
): TSetCurrentUser => ({
  type: SET_CURRENT_USER,
  payload
});

export const editUser = (
  payload: IUpdateUser
): TUpdateUser => ({
  type: UPDATE_USER_BY_ID,
  payload
});

export const fetchUserData = (): IAppThunk =>
  dispatch => {
    return getAxiosInstance().get('users').then(({data}) => {
      dispatch(saveUserData({users: data.collection}))
    }, (error) => {
      console.log(error)
    })
  };

export const createUserRequest = (data: IUserRequestBody): IAppThunk<Promise<void>> =>
  dispatch => {
    return getAxiosInstance().post('users', data).then(() => {
      dispatch(addUser({user: {...data, id: '0', role: {id: data.roleId, title: 'Загрузка'}}}))
    }).then(() => dispatch(fetchUserData()))
  };

export const fetchRoles = (): IAppThunk =>
  dispatch => {
    return getAxiosInstance().get('roles').then(({data}) => {
      dispatch(saveRoles({roles: data.collection}))
    })
  };

export const updateUserData = (id: string, data: IUserRequestBody): IAppThunk<Promise<void>> =>
  dispatch => {
    return getAxiosInstance().put(`users/${id}`, data).then(() => {
      dispatch(editUser({user: {...data, id: 'id', role: {id: data.roleId, title: 'Загрузка'}}}))
    }).then(() => dispatch(fetchUserData()))
  };
