import ProductDetail from "../components/card/product/ProductDetailView";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/registration/login/Login";
import SignUp from "../pages/registration/signup/SignUp";
import VendorSignUp from "../pages/registration/vendor/VendorSignUp";
import Product from "../pages/vendor/product/Product";

const AppRoutes = [
  {
    name: "Home",
    route: "/home",
    page: <Home />,
    role: ["user", "guest", "vendor"],
  },
  {
    name: "Login",
    route: "/login",
    page: <Login />,
    role: ["guest"],
  },
  {
    name: "Sing Up",
    route: "/signup",
    page: <SignUp />,
    role: ["guest"],
  },
  {
    name: "Product Detail",
    route: "/product-detail",
    page: <ProductDetail />,
    role: ["user"],
  },
  {
    name: "Vendor Signup",
    route: "/vendor/signup",
    role: ["guest"],
    page: <VendorSignUp />,
  },

  {
    name: "Add Product",
    route: "/vendor/product",
    role: ["vendor"],
    page: <Product />,
  },

  {
    name: "Add Product",
    route: "/vendor/product-request",
    role: ["vendor"],
    page: <h1>hi</h1>,
  },

  {
    name: "Not Found",
    route: "/not-found",
    role: ["vendor", "user"],
    page: <NotFound />,
  },
];

export default AppRoutes;
