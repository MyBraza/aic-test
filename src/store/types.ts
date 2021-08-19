import {SAVE_USER_DATA} from "@store/actionTypes";
import {UserViewModel} from "../interfaces/users";

export interface IAppState {
  users: UserViewModel[]
}

export interface ISaveUserDataPayload {
  users: UserViewModel[]
}

export type TSaveUserData = {
  type: typeof SAVE_USER_DATA
  payload: ISaveUserDataPayload
}

export type TActions = TSaveUserData
