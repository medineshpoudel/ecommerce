import ProductDetail from "../components/card/product/ProductDetailView";
import Home from "../pages/Home/Home";
import Login from "../pages/registration/login/Login";
import SignUp from "../pages/registration/signup/SignUp";
import VendorSignUp from "../pages/registration/vendor/VendorSignUp";

const AppRoutes = [
  {
    name: "Home",
    route: "/home",
    page: <Home />,
    role: "user",
  },
  {
    name: "Login",
    route: "/login",
    page: <Login />,
    role: "guest",
  },
  {
    name: "Sing Up",
    route: "/signup",
    page: <SignUp />,
    role: "guest",
  },
  {
    name: "Product Detail",
    route: "/product-detail",
    page: <ProductDetail />,
    role: "user",
  },
  {
    name: "Vendor Signup",
    route: "/vendor/signup",
    role: "guest",
    page: <VendorSignUp />,
  },
];

export default AppRoutes;
