import { useDispatch, useSelector } from "react-redux";
import Header from "./layout/Header/Header"
import MainRoutes from "./routes/MainRoutes"
import { asyncCurrentUser } from "./features/user/userActions";
import { useEffect } from "react";

const App = () => {

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);

  useEffect(() => {
    !users && dispatch(asyncCurrentUser());
  }, [users]);

  return (
    <div>
      <Header />
      <MainRoutes />
    </div>
  )
}

export default App