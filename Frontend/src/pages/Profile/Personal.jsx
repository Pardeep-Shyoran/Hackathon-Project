import { useSelector } from "react-redux";
import styles from "./Personal.module.css";
import { Helmet } from "react-helmet";

const Personal = () => {
    const { users } = useSelector((state) => state.userReducer);

    return (
        <div className={styles["personal-root"]}>
            <Helmet>
                <title>FOKUS || My Profile</title>
            </Helmet>
            <div className={styles["personal-container"]}>
                <div className={styles["personal-text"]}>
                    <h1>{users?.username}</h1>
                    <h1 className={styles["personal-email"]}>{users?.email}</h1>
                </div>
                <img
                    className={styles["personal-image"]}
                    src={users?.image}
                    alt={users?.username + "'s profile"}
                />
            </div>
        </div>
    );
};

export default Personal;
