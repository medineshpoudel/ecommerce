import ProductDetail from "../components/card/product/ProductDetailView";
import CartDetailView from "../components/layout/detail-view/CardDetailView";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/registration/login/Login";
import SignUp from "../pages/registration/signup/SignUp";
import VendorSignUp from "../pages/registration/vendor/VendorSignUp";
import Product from "../pages/vendor/product/Product";
import ProductOrders from "../pages/vendor/product/product-order/ProductOrders";

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
    route: "/product-detail/:id",
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
    page: <ProductOrders />,
  },

  {
    name: "Not Found",
    route: "/not-found",
    role: ["vendor", "user"],
    page: <NotFound />,
  },
  {
    name: "Cart",
    route: "/cart",
    role: ["vendor", "user"],
    page: <CartDetailView />,
  },
];

export default AppRoutes;
