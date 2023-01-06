import { Provider } from "react-redux"
import { RouterProvider } from "react-router"
import indexRouter from "./router/index"
import store from "./store/store"

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <RouterProvider router={indexRouter} />
    </div>
    </Provider>
  )
}

export default App
