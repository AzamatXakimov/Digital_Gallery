import "./Profile.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { ProfileNav } from "../../components/ProfileNav/ProfileNav";

export const Profile = () => {
    const {token} = useSelector((state) => state);
    const navigate = useNavigate()

    // useEffect(() => {
    //     console.log(token.token);
    //     if(!token.token) {
    //         navigate("/login")
    //     }
    // }, [token.token]);
    return <>
        <div className="profile-wrapper">
            <ProfileHeader/>

            <main className="profile-main">
                <div className="profile-main-inner">
                    <ProfileNav/>
                </div>
            </main>
        </div>
    </>
}
