import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import { FilterSidebarLayout, MainLayout } from "./components/index";
import Search from "./pages/Search/Search";
import Login from "./pages/Login/Login";

// const router = createBrowserRouter([
//   { path: "/", Component: Home },
//   {
//     path: "*", element: <MainLayout />, children: [
//       { path: "/products", Component: Products },
//       { path: "/search", Component: Search }
//     ]
//   }
// ])

const ProductsApp = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          index
          element={<Products />}
        />
        <Route
          path="search"
          element={<Search />}
        />
      </Route>
    </Routes>
  );
};

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/products/*"
        element={<ProductsApp />}
      />
      {/* <Route path="/products/:query" element={<Search />} /> */}
    </Routes>
  );
};

export default App;
