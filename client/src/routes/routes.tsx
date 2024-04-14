import ProductDetail from "../components/card/product/ProductDetailView";
import Home from "../pages/Home/Home";
import Login from "../pages/registration/login/Login";
import SignUp from "../pages/registration/signup/SignUp";

const AppRoutes = [
  {
    name: "Home",
    route: "/home",
    page: <Home />,
  },
  {
    name: "Login",
    route: "/login",
    page: <Login />,
  },
  {
    name: "Sing Up",
    route: "/signup",
    page: <SignUp />,
  },
  {
    name: "Product Detail",
    route: "/product-detail",
    page: <ProductDetail />,
  },
];

export default AppRoutes;
