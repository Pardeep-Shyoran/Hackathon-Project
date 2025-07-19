import { Link, useNavigate } from "react-router-dom"
import styles from "./Register.module.css"
import { useForm } from "react-hook-form"
import { registerUser } from "../../features/auth/authAPI";



const Register = () => {

    const navigate = useNavigate();

    const submitHandler = async (data) => {
        try {
            await registerUser(data);
            alert('Registered successfully');
            navigate('/login');
        } catch (err) {
            alert(err.message);
        }
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm()

//    function submitHandler(data) {
//         console.log(data);
//     }


    return (
        <div className={styles.register}>
            <div className={styles["register-header"]}>
                <h1>Registration</h1>
            </div>
            <form onSubmit={handleSubmit(submitHandler)} className={styles["register-form"]}>

                <div className={`${styles["register-input-group"]} `}>
                    <input
                        {...register("image",
                            {
                                required: { value: true, message: "Image URL is required" },
                            })}
                        className={`${styles["register-input"]} ${errors.image ? styles["input-error"] : ""}`}
                        type="url"
                        placeholder="Image URL"
                    />
                    {errors.image && <p className={styles.error}>{errors.image.message}</p>}
                </div>

                <div className={styles["register-input-group"]}>
                    <input
                        className={`${styles["register-input"]} ${errors.image ? styles["input-error"] : ""}`}
                        {...register("username", {
                            required: { value: true, message: "Username is required" },
                            minLength: { value: 3, message: "Username must be at least 3 characters long" },
                            maxLength: { value: 20, message: "Username at most 20 characters long" }
                        })}
                        type="text"
                        placeholder="username"
                    />
                    {errors.username && <p className={styles.error}>{errors.username.message}</p>}
                </div>

                <div className={styles["register-input-group"]}>
                    <input
                        {...register("email",
                            { required: { value: true, message: "Email is required" } })}
                        className={`${styles["register-input"]} ${errors.image ? styles["input-error"] : ""}`}
                        type="email"
                        placeholder="user@email.com"
                    />
                    {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                </div>

                <div className={styles["register-input-group"]}>
                    <input
                        {...register("password",
                            {
                                required: { value: true, message: "Password is Required" },
                                minLength: { value: 8, message: "Password must be at least 8 characters long" },
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#?!@$%^&*-]).{8,}$/,
                                    message:
                                        "Password contain uppercase, lowercase, number, and special character"
                                }
                            })}
                        className={`${styles["register-input"]} ${errors.image ? styles["input-error"] : ""}`}
                        type="password"
                        placeholder="********"
                    />
                    {errors.password && <p className={styles.error}>{errors.password.message}</p>}
                </div>
                <button className={styles["register-button"]} disabled={isSubmitting}>
                    {isSubmitting ? "Registering..." : "Register"}
                </button>
                <p >
                    Already have an account?
                    <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    )
}

export default Register