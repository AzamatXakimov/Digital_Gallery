import { Link } from "react-router-dom";
import "./Header.scss";
import { BurgerIcon, CloseNavBarIcon, Logo, SunIcon } from "../../assets/images/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTheme } from "../../redux/theme/themeActions";
import { Drawer } from "antd";

export const Header = () => {
    const {token, theme} = useSelector((state) => state);
    const dispatch = useDispatch()
    const [linkDropDown, setLinkDropDown] = useState(false)
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

    const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};
  
    return <>
        <header className="site-header">
            <div className="header-container">
                <div className="header-inner">
                    <Link className="header-logo-link" to="/">
                        <Logo/>
                    </Link>
                    
                    <nav className="header-nav">
                        <ul className="header-nav-list">
                            <li className="header-nav-item">
                                <Link className="header-nav-link" to="/">
                                    Bosh sahifa
                                </Link>
                            </li>
                            <li className="header-nav-item">
                                <Link className="header-nav-link" to="about-us">
                                    Biz haqimizda
                                </Link>
                            </li>
                            <li className="header-nav-item">
                                <button className="header-nav-btn" type="button" onClick={() => {
                                    setLinkDropDown(!linkDropDown)
                                }}>
                                    Bo'limlar
                                </button>

                                <ul className={`header-link-list ${linkDropDown ? "show" : ""}`}>
                                    <li className="header-link-item">
                                        <Link className="header-nav-link dropw-down-link" to="selected-by-categories/digital-design">Raqamli dizayn</Link>
                                    </li>
                                    <li className="header-link-item">
                                        <Link className="header-nav-link dropw-down-link" to="selected-by-categories/photograph">Fotosurat</Link>
                                    </li>
                                    <li className="header-link-item">
                                        <Link className="header-nav-link dropw-down-link" to="selected-by-categories/branding">Brending</Link>
                                    </li>
                                    <li className="header-link-item">
                                        <Link className="header-nav-link dropw-down-link" to="selected-by-categories/hand-drawn-pictures">Qo'lda chizilgan rasmlar</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="header-nav-item">
                                <Link className="header-nav-link" to="rating">
                                    Reyting
                                </Link>
                            </li>
                            <li className="header-nav-item">
                                <Link className="header-nav-link" to="contact">
                                    Bog‘lanish
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="header-btn-box">
                        <button className="header-theme-btn" onClick={() => {
                            hendelChangeTheme()
                        }}>
                            <SunIcon/>
                        </button>
                        <Link className="header-btn-link" to={token.token ? "/profile" : "/login"}>{token.token ? "Profile" : "Kirish"}</Link>
                    </div>

                    <button className="header-navbar-btn" onClick={showDrawer}>
                        <BurgerIcon/>
                    </button>
                    <Drawer
                        title={<span className="header-navbar-title">Digital Gallary</span>}
                        placement={"left"}
                        closable={false}
                        onClose={onClose}
                        open={open}
                        drawerStyle={{ backgroundColor:  theme.theme == "dark" ? '#212529' : "#f8f9fa",}}
                        headerStyle={{padding: "20px"}}
                        bodyStyle={{display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "0 20px"}}
                        extra={
                            <button className="header-navbar-btn" onClick={onClose}>
                                <CloseNavBarIcon/>
                            </button>
                        }
                    >
                        <ul className="header-navbar-list">
                            <li className="header-navbar-item">
                                <Link className="header-navbar-link" to="/">
                                    Bosh sahifa
                                </Link>
                            </li>
                            <li className="header-navbar-item">
                                <Link className="header-navbar-link" to="about-us">
                                    Biz haqimizda
                                </Link>
                            </li>
                            <li className="header-navbar-item">
                                <Link className="header-navbar-link" to="selected-by-categories/digital-design">
                                    Raqamli dizayn
                                </Link>
                            </li>
                            <li className="header-navbar-item">
                                <Link className="header-navbar-link" to="selected-by-categories/photograph">
                                    Fotosurat
                                </Link>
                            </li>
                            <li className="header-navbar-item">
                                <Link className="header-navbar-link" to="selected-by-categories/branding">
                                    Brending
                                </Link>
                            </li>
                            <li className="header-navbar-item">
                                <Link className="header-navbar-link" to="selected-by-categories/hand-drawn-pictures">
                                    Qo'lda chizilgan rasmlar
                                </Link>
                            </li>
                            <li className="header-navbar-item">
                                <Link className="header-navbar-link" to="rating">
                                    Reyting
                                </Link>
                            </li>
                            <li className="header-navbar-item">
                                <Link className="header-navbar-link" to="contact">
                                    Bog‘lanish
                                </Link>
                            </li>
                        </ul>
                        
                        <div className="header-navbar-btn-box">
                            <button className="header-navbar-theme-btn" onClick={() => {
                                hendelChangeTheme()
                            }}>
                                <SunIcon/>
                            </button>
                            <Link className="header-navbar-btn-link" to={token.token ? "/profile" : "/login"}>{token.token ? "Profile" : "Kirish"}</Link>
                        </div>
                    </Drawer>
                </div>
            </div>
        </header>
    </>
}
