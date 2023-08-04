import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
    const {token} = useSelector((state) => state);
    const navigate = useNavigate()

    useEffect(() => {
        console.log(token.token);
        if(!token.token) {
            navigate("/login")
        }
    }, [token.token]);
    return <>
        Profile
    </>
}
