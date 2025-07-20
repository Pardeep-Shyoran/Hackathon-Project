import { Outlet } from "react-router-dom";
import UserProfileNav from "../../components/ProfileNav/ProfileNav";
import "./UserProfile.css";

const UserProfile = () => {
    return (
        <div className="user-profile-root">

            <div className="user-profile-sidebar">
                <UserProfileNav />
            </div>
            <div className="user-profile-content">
                <Outlet />
            </div>
        </div>
    );
};

export default UserProfile;
