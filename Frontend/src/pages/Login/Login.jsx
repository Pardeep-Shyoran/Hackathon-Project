import { Link, useNavigate } from "react-router-dom"
import styles from "./Login.module.css"
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { asyncLoginUser } from "../../features/user/userActions";

const Login = () => {

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (user) => {
    try {
      dispatch(asyncLoginUser(user));
      // console.log(user);
      navigate("/products");
      toast.success("Logged in successfully!");
    } catch (err) {
      // alert(err.message);
      toast.error(err.message || 'Login failed');
    }
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit(onSubmit)}
        className={styles["login-form"]}>
        <div className={styles["login-input-group"]}>
          <input
            {...register("email")}
            className={`${styles["login-input"]}`}
            type="email"
            placeholder="user@email.com"
          />
        </div>

        <div className={styles["login-input-group"]}>
          <input
            {...register("password")}
            className={`${styles["login-input"]}`}
            type="password"
            placeholder="********"
          />
        </div>
        
        <button className={styles["login-button"]}>
          Log In
        </button>
        <p >
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>
      </form>
      <div className={styles["login-header"]}>
        <h1>Log In</h1>
      </div>
    </div>
  )
}

export default Login






// import { Link, useNavigate } from "react-router-dom"
// import styles from "./Login.module.css"
// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";

// const Login = () => {

//   const { register, reset, handleSubmit } = useForm();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const loginHandler = (user) => {
//     console.log(user);
//     navigate("/products");

//     toast.success("Logged in!");
//   };

//   return (
//     <div className={styles.login}>
//       <form onSubmit={handleSubmit(loginHandler)} className={styles["login-form"]}>

//         <div className={styles["login-input-group"]}>
//           <input
//             {...register("email",
//               { required: { value: true, message: "Email is required" } })}
//             className={styles["login-input"]}
//             type="email"
//             placeholder="user@email.com"
//           />
//           {errors.email && <p className={styles.error}>{errors.email.message}</p>}
//         </div>

//         <div className={styles["login-input-group"]}>
//           <input
//             {...register("password",
//               {
//                 required: { value: true, message: "Password is Required" },
//                 minLength: { value: 8, message: "Password must be at least 8 characters long" },
//               })}
//             className={styles["login-input"]}
//             type="password"
//             placeholder="********"
//           />
//           {errors.password && <p className={styles.error}>{errors.password.message}</p>}
//         </div>
//         <button className={styles["login-button"]}>
//           login
//         </button>
//         <p >
//           Don't have an account?
//           <Link to="/register">Register</Link>
//         </p>
//       </form>
//       <div className={styles["login-header"]}>
//         <h1>Log In</h1>
//       </div>
//     </div>
//   )
// }

// export default Login