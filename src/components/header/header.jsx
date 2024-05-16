import style from "../header/header.module.css";
import logo from "../../assets/img/Sevencode.svg";


const Header = () =>{
    return(
       <header className={style.header}>
        <div className={style.HeaderWrapper}>
            <div className={style.logo}>
                <img src={logo} alt="logo seven code"/>
            </div>
                <nav className={style.nav}>
                    <a href="#">Início</a>
                    <a href="#">Sobre</a>
                    <a href="#">Linguagem</a>
                    <a href="#">Documentação</a>
                    <button className={style.buttonLogin}>Login</button>
                    <button href="#" className={style.buttonRegistro}>Registro</button>
                </nav>
           
        </div>
       </header>
    );
};

export default Header;