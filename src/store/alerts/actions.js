import { createAction } from "@reduxjs/toolkit"

const addAlert = createAction("addAlert", (alert) => ({
  payload: {
    alert: alert.type,
    message: alert.message,
  },
}))

const getAlerts = createAction("getAlerts")

const alertActions = {
  addAlert,
  getAlerts,
}

export default alertActions
