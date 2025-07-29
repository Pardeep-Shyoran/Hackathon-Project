import { Outlet } from "react-router-dom";
import UserProfileNav from "../../components/ProfileNav/ProfileNav";
import "./UserProfile.css";
import { Helmet } from "react-helmet";

const UserProfile = () => {
    return (
        <div className="user-profile-root">
            <Helmet>
                <title>FOKUS || Profile</title>
            </Helmet>

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
