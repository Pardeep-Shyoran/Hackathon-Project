import { useDispatch, useSelector } from "react-redux";
import Header from "./layout/Header/Header"
import MainRoutes from "./routes/MainRoutes"
import { asyncCurrentUser } from "./features/user/userActions";
import OpeningAnimation from "./components/OpeningAnimation/OpeningAnimation";
import { useEffect } from "react";
import Splash from "./components/Splash/Splash"
import { asyncLoadProducts } from "./features/Product/productActions";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import gsap from "gsap";


gsap.registerPlugin(ScrollSmoother);


const App = () => {

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: true,
    })
  }, []);

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

    <>
        <Header />
    <div id="smooth-wrapper">
      <div id="smooth-content">

        {/* <OpeningAnimation /> */}
        <MainRoutes />
      </div>
    </div>
    </>
    // </Splash>
  )
}

export default App