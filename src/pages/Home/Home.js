import { Route, Routes } from "react-router-dom"
import { Main } from "../Main/Main"
import { Header } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"

export const Home = () => {
    return <>
        <Header/>
        
        <main className="site-main home-page">
            <Routes>
                <Route index element={<Main/>}/>
                {/* <Route path="about-us" element={</>}/> */}
                {/* <Route path="selected-by-categories/:id" element={</>}/> */}
                {/* <Route path="art/:id" element={</>}/> */}
                {/* <Route path="rating" element={</>}/> */}
                {/* <Route path="contact" element={</>}/> */}
            </Routes>
        </main>

        <Footer/>
    </>
}
