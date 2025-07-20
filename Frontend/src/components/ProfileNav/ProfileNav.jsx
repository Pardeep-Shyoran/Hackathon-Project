import { useDispatch, useSelector } from "react-redux";
import { asyncDeleteUser, asyncLogoutUser } from "../../features/user/userActions";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./ProfileNav.css";

const UserProfileNav = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { users } = useSelector((state) => state.userReducer);

    const LogoutProfileHandler = () => {
        dispatch(asyncLogoutUser(users.id));
        navigate("/login");
        toast.warn("Logged out!");
    };

    const DeleteProfileHandler = () => {
        dispatch(asyncDeleteUser(users.id));
        navigate("/login");
        toast.warn("Profile Deleted!");
    };

    return (
        <div className="user-profile-nav-root">
            <NavLink
                to="/user/profile"
                end
                className={({ isActive }) =>
                    "user-profile-nav-link" + (isActive ? " active" : "")
                }
            >
                Personal
            </NavLink>
            <NavLink
                to="update-profile"
                className={({ isActive }) =>
                    "user-profile-nav-link" + (isActive ? " active" : "")
                }
            >
                Update Profile
            </NavLink>
            <button
                type="button"
                onClick={LogoutProfileHandler}
                className="user-profile-nav-button"
            >
                Logout
            </button>
            <button
                type="button"
                onClick={DeleteProfileHandler}
                className="user-profile-nav-button delete"
            >
                Delete Profile
            </button>
        </div>
    );
};

export default UserProfileNav;
