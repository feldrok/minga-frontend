import addAlert from "./actions"
import getAlerts from "./actions"

const initialState = {
  alerts: [],
}

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case addAlert.type:
      return {
        ...state,
        alerts: [...state.alerts, action.payload],
      }
    case getAlerts.type:
      return {
        ...state,
        alerts: action.payload,
      }
    default:
      return state
  }
}


export default alertReducer
