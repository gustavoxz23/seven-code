import style from "../conteudo1/conteudo1.module.css";
import imgg from "../../assets/img/IMAGE.png";

const Conteudo1 = () => {
  return (
    <section className={style.section1}>
     
     <div className={style.conteoTextoud}>
        <h2>Poderoso para Devs.
          Rápido e fácil uso.</h2>
        <p>
          Leve nossa IDE para sua equipe. Ninesevem oferece suporte a
          experiências para usuários avançados, novos consumidores e todos os
          demais. Saiba mais Sobre nós
        </p>
        <a href="#" className={style.buttonSM}>SAIBA MAIS</a>
      <a href="#" className={style.buttonSN}>SOBRE NÓS</a>
      </div>
     
      <div className={style.imgC}>
        <img src={imgg} alt="" />
      </div>
    </section>
  );
};

export default Conteudo1;
