import { Branding } from "../../components/Branding/Branding"
import { DigitalDesign } from "../../components/DigitalDesign/DigitalDesign"
import { HandDrawn } from "../../components/HandDrawn/HandDrawn"
import { Hero } from "../../components/Hero/Hero"
import { Photographs } from "../../components/Photographs/Photographs"
import "./Main.scss"
export const Main = () => {
    return <>
        <div className="main-page-wrapper">
            {/* HERO  */}
            <Hero/>
            
            {/* Digital design  */}
            <DigitalDesign/>

            {/* Photographs */}
            <Photographs/>

            {/* Hand drawn pictures */}
            <HandDrawn/>

            {/* Branding */}
            <Branding/>
        </div>
    </>
}
