import { Link, NavLink, useNavigate } from "react-router-dom";
import "./ProfileHeader.scss";
import { BurgerIcon, CloseNavBarIcon, LogOutIcon, Logo, SunIcon } from "../../assets/images/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { addTheme } from "../../redux/theme/themeActions";
import { deleteToken } from "../../redux/token/tokenActions";
import { useState } from "react";
import { Drawer } from "antd";
export const ProfileHeader = () => {
    const {token, theme} = useSelector((state) => state);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const hendelChangeTheme = () => {
        if(theme.theme == "dark") {
            dispatch(addTheme("light"));
            localStorage.setItem("theme", "light");
        }
        else {
            dispatch(addTheme("dark"));
            localStorage.setItem("theme", "dark");
        }
    }

    // DRAWER 
    const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

    const hendelLogOut = () => {
        dispatch(deleteToken());
        localStorage.removeItem("token");
        navigate("/")
    }
    return (
		<>
			<header className='profile-header'>
				<button
					className='profile-header-navbar-btn'
					onClick={showDrawer}
				>
					<BurgerIcon />
				</button>
				<div className='profile-header-logo-box'>
					<Link className='header-logo-link' to='/'>
						<Logo />
					</Link>
				</div>

				<div className='profile-header-btn-box'>
					<button
						className='profile-header-log-out-btn'
						onClick={() => {
							hendelLogOut();
						}}
					>
						<LogOutIcon />
					</button>
					<button
						className='profile-header-theme-btn'
						onClick={() => {
							hendelChangeTheme();
						}}
					>
						<SunIcon />
					</button>
				</div>
				<Drawer
					title={
						<span className={`header-navbar-title ${theme.theme}`}>
							Digital Gallary
						</span>
					}
					placement={'left'}
					closable={false}
					onClose={onClose}
					open={open}
					drawerStyle={{
						backgroundColor: theme.theme == 'dark' ? '#212529' : '#f8f9fa',
					}}
					headerStyle={{ padding: '20px' }}
					bodyStyle={{
						padding: '0 20px',
					}}
					extra={
						<button className='header-navbar-btn' onClick={onClose}>
							<CloseNavBarIcon />
						</button>
					}
				>
                    <div className='profile-header-navbar-btn-box'>
						<button
							className={`header-navbar-theme-btn ${theme.theme}`} 
							onClick={() => {
								hendelChangeTheme();
							}}
						>
							<SunIcon />
						</button>
					</div>
					<ul className='profile-navbar-list'>
						<li className='profile-navbar-item'>
							<NavLink
								className={`profile-navbar-link ${theme.theme}`}
								to='my-photos'
							>
								Mening fotosuratlarim
								<span className='profile-navbar-cout-news'>0</span>
							</NavLink>
						</li>
						<li className='profile-navbar-item'>
							<NavLink
								className={`profile-navbar-link ${theme.theme}`}
								to='submitted-applications'
							>
								Yuborilgan arizalar
								<span className='profile-navbar-cout-news'>0</span>
							</NavLink>
						</li>
						<li className='profile-navbar-item'>
							<NavLink
								className={`profile-navbar-link ${theme.theme}`}
								to='incoming-messages'
							>
								Kelgan xabarlar
								<span className='profile-navbar-cout-news'>0</span>
							</NavLink>
						</li>
						<li className='profile-nav-item'>
							<NavLink className={`profile-navbar-link ${theme.theme}`} to='comments'>
								Sharxlar
								<span className='profile-navbar-cout-news'>0</span>
							</NavLink>
						</li>
					</ul>

				</Drawer>
			</header>
		</>
	);
}
