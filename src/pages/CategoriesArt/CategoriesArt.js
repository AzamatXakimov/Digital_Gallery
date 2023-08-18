import { useParams } from "react-router-dom";
import "./CategoriesArt.scss"
import { useState, useEffect } from "react";
import { CategoriesImageCard } from "../../components/CategoriesImageCard/CategoriesImageCard";

// IMAGE IMPORTS 
import digitalDesingImg1 from "../../assets/images/oy-bola.jpg"
import digitalDesingImg2 from "../../assets/images/Rinki.jpg"
import digitalDesingImg3 from "../../assets/images/Quvonch.jpg"
import digitalDesingImg4 from "../../assets/images/qoziqorin-uy.jpg"
import digitalDesingImg5 from "../../assets/images/Baliq-ovi.jpg"
import digitalDesingImg6 from "../../assets/images/qish-fasli.jpg"
import digitalDesingImg7 from "../../assets/images/tabiat.jpg"
import digitalDesingImg8 from "../../assets/images/dizayn.jpg"
import digitalDesingImg9 from "../../assets/images/abdug'afforova-jamila.jpg"
import digitalDesingImg10 from "../../assets/images/anoor-6.jpg"
import digitalDesingImg11 from "../../assets/images/dilurojonova.jpg"
import digitalDesingImg12 from "../../assets/images/nematjonova-dilbaroy.jpg"
import digitalDesingImg13 from "../../assets/images/usmonova-malik.jpg"
import digitalDesingImg14 from "../../assets/images/xosiyatoy-rustamjonova.jpg"
import digitalDesingImg15 from "../../assets/images/xursanova.jpg"
import digitalDesingImg16 from "../../assets/images/yusupaliyeva.jpg"

import photographImg1 from "../../assets/images/Otov.jpg"
import photographImg2 from "../../assets/images/Qoya-tosh.jpg"
import photographImg3 from "../../assets/images/Toshlar.jpg"
import photographImg4 from "../../assets/images/zinapoya.jpg"
import photographImg5 from "../../assets/images/chol-toshi.jpg"
import photographImg6 from "../../assets/images/tuproq-shisha.jpg"
import photographImg7 from "../../assets/images/tuproq.jpg"
import photographImg8 from "../../assets/images/abdulajon.jpg"
import photographImg9 from "../../assets/images/qoya.jpg"
import photographImg10 from "../../assets/images/kabutar.jpg"
import photographImg11 from "../../assets/images/suv-tomchi.jpg"
import photographImg12 from "../../assets/images/artof-muhit.jpg"
import photographImg13 from "../../assets/images/choldagi-shisha.jpg"
import photographImg14 from "../../assets/images/chol.jpg"
import photographImg15 from "../../assets/images/taniat-muhovazasi.jpg"
import photographImg16 from "../../assets/images/ish-qilib-zerikgan-bola.jpg"

import brandingImg1 from "../../assets/images/Brending-1.jpg";
import brandingImg2 from "../../assets/images/Brending-2.jpg";
import brandingImg3 from "../../assets/images/Brending-3.jpg";
import brandingImg4 from "../../assets/images/Brending-4.jpg";
import brandingImg5 from "../../assets/images/Brending-5.jpg";


import handDrawImg1 from "../../assets/images/mult-film.jpg"
import handDrawImg2 from "../../assets/images/ozbekiston-qoraqalpogiston.jpg"
import handDrawImg3 from "../../assets/images/about-us.jpg"
export const CategoriesArt = () => {

    // DATAS 
    const digitalDesingData = [
        {
            id: 1,
            title: "Oybola surati",
            desc: "Muallif: Digital Generation",
            img: digitalDesingImg1,
            link: "/art/d-design:1"
        },
        {
            id: 2,
            title: "Rinky",
            desc: "Muallif: Digital Generation",
            img: digitalDesingImg2,
            link: "/art/d-design:2"
        },
        {
            id: 3,
            title: "Quvonch",
            desc: "Muallif: Digital Generation",
            img: digitalDesingImg3,
            link: "/art/d-design:3"
        },
        {
            id: 4,
            title: "Qo'ziqorinli uy",
            desc: "Muallif: Digital Generation",
            img: digitalDesingImg4,
            link: "/art/d-design:4"
        },
        {
            id: 5,
            title: "Baliq ovi",
            desc: "Muallif: Digital Generation",
            img: digitalDesingImg5,
            link: "/art/d-design:5"
        },
        {
            id: 6,
            title: "Qish fasli",
            desc: "Muallif: Digital Generation",
            img: digitalDesingImg6,
            link: "/art/d-design:6"
        },
        {
            id: 7,
            title: "Tabiat",
            desc: "Muallif: Digital Generation",
            img: digitalDesingImg7,
            link: "/art/d-design:7"
        },
        {
            id: 8,
            title: "Dizayn",
            desc: "Muallif: Digital Generation",
            img: digitalDesingImg8,
            link: "/art/d-design:8"
        },
        {
            id: 9,
            title: "Abdug`afforova Jamila",
            desc: "Muallif: Digital Generation",
            img: digitalDesingImg9,
            link: "/art/d-design:9"
        },
        {
            id: 10,
            title: "Anoor6",
            desc: "Muallif: Digital Generation",
            img: digitalDesingImg10,
            link: "/art/d-design:10"
        },
        {
            id: 11,
            title: "Dilurodjonova Ismigul11",
            desc: "Muallif: Digital Generation",
            img: digitalDesingImg11,
            link: "/art/d-design:11"
        },
        {
            id: 12,
            title: "NE`MATJONOVA  DILBAROY",
            desc: "Muallif: Digital Generation",
            img: digitalDesingImg12,
            link: "/art/d-design:12"
        },
        {
            id: 13,
            title: "USMONOVA MALIKA33",
            desc: "Muallif: Digital Generation",
            img: digitalDesingImg13,
            link: "/art/d-design:13"
        },
        {
            id: 14,
            title: "XOSIYATOY RUSTAMJONOVA",
            desc: "Muallif: Digital Generation",
            img: digitalDesingImg14,
            link: "/art/d-design:14"
        },
        {
            id: 15,
            title: "XURSANOVA SHABNAM1",
            desc: "Muallif: Digital Generation",
            img: digitalDesingImg15,
            link: "/art/d-design:15"
        },
        {
            id: 16,
            title: "YUSUPALIYEVA MARG`UBA",
            desc: "Muallif: Digital Generation",
            img: digitalDesingImg16,
            link: "/art/d-design:16"
        },
    ];

    const photographsData = [
        {
            id: 1,
            title: "O'tov",
            desc: "Muallif: Digital Generation",
            img: photographImg1,
            link: "/art/photographs:1"
        },
        {
            id: 2,
            title: "Qoya tosh",
            desc: "Muallif: Digital Generation",
            img: photographImg2,
            link: "/art/photographs:2"
        },
        {
            id: 3,
            title: "Toshlar",
            desc: "Muallif: Digital Generation",
            img: photographImg3,
            link: "/art/photographs:3"
        },
        {
            id: 4,
            title: "Zinapoya",
            desc: "Muallif: Digital Generation",
            img: photographImg4,
            link: "/art/photographs:4"
        },
        {
            id: 5,
            title: "Cho'l toshi",
            desc: "Muallif: Digital Generation",
            img: photographImg5,
            link: "/art/photographs:5"
        },
        {
            id: 6,
            title: "Tuproq va shisha",
            desc: "Muallif: Digital Generation",
            img: photographImg6,
            link: "/art/photographs:6"
        },
        {
            id: 7,
            title: "Tuproq",
            desc: "Muallif: Digital Generation",
            img: photographImg7,
            link: "/art/photographs:7"
        },
        {
            id: 8,
            title: "Abdullajon",
            desc: "Muallif: Digital Generation",
            img: photographImg8,
            link: "/art/photographs:8"
        },
        {
            id: 9,
            title: "Qoya",
            desc: "Muallif: Digital Generation",
            img: photographImg9,
            link: "/art/photographs:9"
        },
        {
            id: 10,
            title: "Kabutar",
            desc: "Muallif: Digital Generation",
            img: photographImg10,
            link: "/art/photographs:10"
        },
        {
            id: 11,
            title: "Suv Tomchi",
            desc: "Muallif: Digital Generation",
            img: photographImg11,
            link: "/art/photographs:11"
        },
        {
            id: 12,
            title: "Atrof Muhit",
            desc: "Muallif: Digital Generation",
            img: photographImg12,
            link: "/art/photographs:12"
        },
        {
            id: 13,
            title: "Cho'ldagi Shisha",
            desc: "Muallif: Digital Generation",
            img: photographImg13,
            link: "/art/photographs:13"
        },
        {
            id: 14,
            title: "Cho'l",
            desc: "Muallif: Digital Generation",
            img: photographImg14,
            link: "/art/photographs:14"
        },
        {
            id: 15,
            title: "Tabiat Muhofazasi",
            desc: "Muallif: Digital Generation",
            img: photographImg15,
            link: "/art/photographs:15"
        },
        {
            id: 16,
            title: "Ish Qilib Zerikgan Bola",
            desc: "Muallif: Digital Generation",
            img: photographImg16,
            link: "/art/photographs:16"
        },
    ];

    const brandingData = [
        {
            id: 1,
            title: "Venere",
            desc: "Muallif: Digital Generation",
            img: brandingImg1,
            link: "/art/branding:1"
        },
        {
            id: 2,
            title: "Rase",
            desc: "Muallif: Digital Generation",
            img: brandingImg2,
            link: "/art/branding:2"
        },
        {
            id: 3,
            title: "Debo Verde",
            desc: "Muallif: Digital Generation",
            img: brandingImg3,
            link: "/art/branding:3"
        },
        {
            id: 4,
            title: "Christian",
            desc: "Muallif: Digital Generation",
            img: brandingImg4,
            link: "/art/branding:4"
        },
        {
            id: 5,
            title: "Eximil",
            desc: "Muallif: Digital Generation",
            img: brandingImg5,
            link: "/art/branding:5"
        },
    ];

    const handDrawData = [
        {
            id: 1,
            title: "Multfilm",
            desc: "Muallif: Digital Generation",
            img: handDrawImg1,
            link: "/art/h-draw:1"
        },
        {
            id: 2,
            title: "Oʻzbekiston respublikasi va Qoraqalpogʻiston respublikasi",
            desc: "Muallif: Digital Generation",
            img: handDrawImg2,
            link: "/art/h-draw:2"
        },
        {
            id: 3,
            title: "UzbekchaYer",
            desc: "Muallif: Digital Generation",
            img: handDrawImg3,
            link: "/art/h-draw:3"
        },
    ];
    const { id } = useParams();
    const [dataTemp, setDataTemp] = useState([])

    useEffect(() => {
        setDataTemp(id=="digital-design" ? digitalDesingData : id=="photograph" ? photographsData : id=="branding" ?  brandingData : id=="hand-drawn-pictures" ? handDrawData : [])
    }, [id]);
    return <>
        <section className="categories-art">
            <div className="container">
                <h2 className="visually-hidden">
                    Art Categories
                </h2>

                <ul className="categories-art-list">
                    {dataTemp.map((item, i) => (
                        <li className="categories-art-item">
                            <div className="categories-art-item-inner">
                                <CategoriesImageCard obj={item} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </>
}
