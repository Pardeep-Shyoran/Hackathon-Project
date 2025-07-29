import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncUpdateUser } from "../../features/user/userActions";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

import "./UpdateUserProfile.css"; // External CSS

const UpdateUserProfile = () => {
    const { users } = useSelector((state) => state.userReducer);
    const { register, handleSubmit } = useForm({
        defaultValues: {
            image: users?.image,
            username: users?.username,
            email: users?.email,
            password: users?.password,
        },
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const UpdateUserHandler = (user) => {
        dispatch(asyncUpdateUser(users.id, user));
        toast.success("Profile Updated");
        navigate("/user/profile");
    };

    if (!users) return "Loading...";

    return (
        <div className="update-profile-container">
            <Helmet>
                <title>FOKUS || Update Profile</title>
            </Helmet>
            <div className="form-wrapper">
                <form
                    onSubmit={handleSubmit(UpdateUserHandler)}
                    className="profile-form"
                >
                    <input
                        {...register("image")}
                        type="url"
                        placeholder="Image URL"
                        className="input-field"
                    />
                    <input
                        {...register("username")}
                        type="text"
                        placeholder="john-doe"
                        className="input-field"
                    />
                    <input
                        {...register("email")}
                        type="email"
                        placeholder="john@doe.com"
                        className="input-field"
                    />
                    <input
                        {...register("password")}
                        type="password"
                        placeholder="********"
                        className="input-field"
                    />

                    <div className="form-actions">
                        <button type="submit" className="submit-button">
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateUserProfile;
