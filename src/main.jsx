import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";

//react router dom imports to create and implement routing
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// elements or components to be used in router
import Layout from "./components/Layout";
import RecipeApp from "./features/Recipe/RecipeApp";
import Favorite from "./pages/Favorite";
import RecipieDetails from "./components/Reusable Components/RecipeDetails";

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // this is main router or home
      <Route
        path='/'
        element={<Layout />}>
        <Route
          path=''
          element={<RecipeApp />}
        />
        <Route
          path='favorites'
          element={<Favorite />}
        />
        <Route
          path='recipe/:id'
          element={<RecipieDetails />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Index;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Index />
    </Provider>
  </React.StrictMode>
);
