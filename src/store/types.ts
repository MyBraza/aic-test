import {
  ADD_USER,
  SAVE_USER_DATA,
  SAVE_ROLES,
  SET_CURRENT_USER,
  UPDATE_USER_BY_ID
} from "@store/actionTypes";
import {IUserRoleImpl, IUserViewModel} from "../interfaces";
import {ThunkAction} from "redux-thunk";
import {AnyAction} from "redux";

export interface IAppState {
  users: IUserViewModel[]
  roles: IUserRoleImpl[]
  currentUser: IUserViewModel | undefined
}

export type IAppThunk<ReturnType = void> = ThunkAction<ReturnType, IAppState, unknown, AnyAction>

export interface ISaveUserDataPayload {
  users: IUserViewModel[]
}

export interface IAddUserPayload {
  user: IUserViewModel
}

export interface ISaveRolesPayload {
  roles: IUserRoleImpl[]
}

export interface ISetCurrentUserPayload {
  currentUser: IUserViewModel | undefined
}

export interface IUpdateUser {
  user: IUserViewModel
}

export type TSaveUserData = {
  type: typeof SAVE_USER_DATA
  payload: ISaveUserDataPayload
}

export type TAddUser = {
  type: typeof ADD_USER
  payload: IAddUserPayload
}

export type TSaveRoles = {
  type: typeof SAVE_ROLES
  payload: ISaveRolesPayload
}

export type TSetCurrentUser = {
  type: typeof SET_CURRENT_USER
  payload: ISetCurrentUserPayload
}

export type TUpdateUser = {
  type: typeof UPDATE_USER_BY_ID
  payload: IUpdateUser
}

export type TActions = TSaveUserData | TAddUser | TSaveRoles | TSetCurrentUser | TUpdateUser
