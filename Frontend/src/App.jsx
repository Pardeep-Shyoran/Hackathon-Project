import { useDispatch, useSelector } from "react-redux";
import Header from "./layout/Header/Header"
import MainRoutes from "./routes/MainRoutes"
import { asyncCurrentUser } from "./features/user/userActions";
import OpeningAnimation from "./components/OpeningAnimation/OpeningAnimation";
import { useEffect } from "react";
import Splash from "./components/Splash/Splash"
import { asyncLoadProducts } from "./features/Product/productActions";

const App = () => {

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);

  useEffect(() => {
    !users && dispatch(asyncCurrentUser());
  }, [users]);

  const { products } = useSelector((state) => state.productReducer);



  useEffect(() => {
    products.length == 0 && dispatch(asyncLoadProducts());
  }, [products]);

  return (
    // <Splash>

    <div>

      {/* <OpeningAnimation /> */}
      <Header />
      <MainRoutes />
    </div>
    // </Splash>
  )
}

export default App