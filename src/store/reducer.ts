import {IAppState, TActions} from '@store/types'

const initialState: IAppState = {
  users: []
};

export default (state = initialState, action: TActions) => {
  switch (action.type) {
    case "SAVE_USER_DATA":
      return {
        ...state,
        users: action.payload.users
      };
    default:
      return state
  }
}
