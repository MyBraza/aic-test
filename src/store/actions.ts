import {SAVE_USER_DATA} from '@store/actionTypes'
import {ISaveUserDataPayload, TSaveUserData} from "@store/types";

export const saveUserData = (
  payload: ISaveUserDataPayload
): TSaveUserData => ({
  type: SAVE_USER_DATA,
  payload
});
