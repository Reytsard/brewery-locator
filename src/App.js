import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import "./styles/main.css";
import RootPage from "./components/RootPage";
import BreweryLocator from "./components/BreweryLocator";
import PageNotFound from "./components/PageNotFound";
import { Provider } from "react-redux";
import { store } from "./feature/store";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootPage />}>
        <Route path="find-brewery" element={<BreweryLocator />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;