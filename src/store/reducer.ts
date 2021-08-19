import { IAppState, TActions } from '@store/types'

const initialState: IAppState = {
}

export default (state = initialState, action: TActions) => {
  switch (action.type) {
    default:
      return state
  }
}
