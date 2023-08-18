import {  NavLink } from "react-router-dom"
import "./ProfileNav.scss"
export const ProfileNav = () => {
    return <>
        <nav className="profile-nav">
            <ul className="profile-nav-list">
                <li className="profile-nav-item">
                    <NavLink className="profile-nav-link" to="my-photos">
                        Mening fotosuratlarim
                        <span className="profile-nav-cout-news">0</span>
                    </NavLink>
                </li>
                <li className="profile-nav-item">
                    <NavLink className="profile-nav-link" to="submitted-applications">
                        Yuborilgan arizalar
                        <span className="profile-nav-cout-news">0</span>
                    </NavLink>
                </li>
                <li className="profile-nav-item">
                    <NavLink className="profile-nav-link" to="incoming-messages">
                        Kelgan xabarlar
                        <span className="profile-nav-cout-news">0</span>
                    </NavLink>
                </li>
                <li className="profile-nav-item">
                    <NavLink className="profile-nav-link" to="comments">
                        Sharxlar
                        <span className="profile-nav-cout-news">0</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </>
}
