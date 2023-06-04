import React,{useEffect} from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import "./Footer.css"
import mec_logo from "../../assets/svg/mec_logo.svg";
import excel_logo from "../../assets/svg/excel23_logo.svg";
const Footer = () => {
  useEffect(() => {
    Aos.init({duration:900})
  }, []);

  return (
  
 <div class="footer">
                    <a href="https://www.excelmec.org/" target="_blank" rel="noreferrer" > <img src={excel_logo} alt='excelLogo'/></a>
                    <div class="footer__content">
                        <div class="footer__social">
                            <a href="https://www.facebook.com/excelmec/" target="_blank" rel="noreferrer">
                                <i class="fab fa-facebook-f" data-aos="zoom-in"></i>
                            </a>
                            <a href="https://www.instagram.com/excelmec/" target="_blank" rel="noreferrer">
                                <i class="fab fa-instagram" data-aos="zoom-in"></i>
                            </a>
                            <a href="https://twitter.com/excelmec" target="_blank" rel="noreferrer">
                                <i class="fab fa-twitter" data-aos="zoom-in"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/excelmec" target="_blank" rel="noreferrer">
                                <i class="fab fa-linkedin-in"data-aos="zoom-in"></i>
                            </a>
                        </div>
                        <div class="footer__text">
                            Made with <i class="fas fa-heart"></i> Excel 2022
                        </div>
                    </div>
                    <a href="http://www.mec.ac.in/" target="_blank" rel="noreferrer" id="clg-logo" ><img src={mec_logo} alt='mecLogo'/></a>
                </div>   
  )
}

export default Footer