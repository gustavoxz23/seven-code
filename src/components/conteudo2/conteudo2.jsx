import style from "../../components/conteudo2/conteudo2.module.css";
import imagg2 from "../../assets/img/IMAGE2.png";


const Conteudo2 = () => {
    return(
        <section className={style.section2}>
            <div className={style.Wrapper2}>
                <img src={imagg2} alt="" />
            </div>
            <div className={style.conteoTextoud2}>
                <h3>É hora de se juntar aos milhares de criadores, artistas e desenvolvedores que usam Nineseven.
Saiba mais</h3>
<a href="#" className={style.buttonSM}>SAIBA MAIS</a>
            </div>
        </section>
    )
}

export default Conteudo2;