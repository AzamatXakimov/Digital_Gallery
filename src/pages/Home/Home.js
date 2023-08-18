import { Route, Routes } from "react-router-dom"
import { Main } from "../Main/Main"
import { Header } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"
import { CategoriesArt } from "../CategoriesArt/CategoriesArt";
import { AboutUs } from "../AboutUs/AboutUs"
import { NotFound404 } from "../NotFound404/NotFound404";
import { Rating } from "../Rating/Rating";
import { Contact } from "../Contact/Contact";
import { AboutImage } from "../AboutImage/AboutImage";

export const Home = () => {
    return <>
        <Header/>
        
        <main className="site-main home-page">
            <Routes>
                <Route index element={<Main/>}/>
                <Route path="about-us" element={<AboutUs/>}/>
                <Route path="selected-by-categories/:id" element={<CategoriesArt/>}/>
                <Route path="art/:id" element={<AboutImage/>}/>
                <Route path="rating" element={<Rating/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="*" element={<NotFound404/>}/>
            </Routes>
        </main>

        <Footer/>
    </>
}
