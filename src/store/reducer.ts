import {IAppState, TActions} from '@store/types'

const initialState: IAppState = {
  users: [],
  roles: [],
  currentUser: undefined
};

export default (state = initialState, action: TActions) => {
  switch (action.type) {
    case "SAVE_USER_DATA":
      return {
        ...state,
        users: action.payload.users
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload.user]
      };
    case "SAVE_ROLES":
      return {
        ...state,
        roles: action.payload.roles
      };
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload.currentUser
      };
    case "UPDATE_USER_BY_ID":
      return {
        ...state,
        users: state.users.map(user => action.payload.user.id === user.id ? action.payload.user : user)
      };
    default:
      return state
  }
}
