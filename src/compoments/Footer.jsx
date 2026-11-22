import Logo from "./Logo";
import insta from '../assets/instagram.svg';
import face from "../assets/facebook.svg";
import twtr from '../assets/twitter.svg';
import Information  from "./Information.jsx";
import "../App.css"

function Footer(){

    const informations = [
        {
          text: "Sobre Drip Store",
          link: "/",
        },
        {
          text: "Blog",
          link: "/",
        },
        {
          text: "Segurança",
          link: "/",
        },
        {
          text: "Meus Pedidos",
          link: "/",
        },
        {
          text: "Trabalhe conosco",
          link: "/",
        },
        {
          text: "Contato",
          link: "/",
        },
      ];
    
      const informations2 = [
        {
          text: "Camisetas",
          link: "/",
        },
        {
          text: "Calças",
          link: "/",
        },
        {
          text: "Bones",
          link: "/",
        },
        {
          text: "Headphones",
          link: "",
        },
        {
          text: "Tenis",
          link: "",
        },
      ];
      const informations3 = [

       {
          text: "Av. Santos Dumont, 1510, 1° e 10° andar",
          
        },
        {
          text: "Aldeota - Fortaleza/CE",
         
        },
        {
          text: "Cep, 60150-161",
         
        },
        {
          text: "(85) 3051-3411",
          
        },
      ]
      
return(
  
          
  <footer className="footer" style={{backgroundColor:"var(--dark-gray)",padding:"40px", color:"white"}}>
      
  <div className="footer-conteudo" style={{display:"flex", alignItems:"flex-start", gap:"80px"}}>

    <div className="footer-logo" style={{display:"flex", flexDirection:"column", width:"350px"}}>
      <Logo color="white" />

      <p style={{marginTop:"20px",lineHeight:"1.1", color:"#fff", marginBottom:"10px"}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Numquam dignissimos nemo a molestias officiis, voluptatum
        eius illo nihil nam autem pariatur veniam qui quasi esse
        animi dolore incidunt blanditiis quod.
      </p>

      <div className="redes-sociais" style={{display:"flex", gap:"15px", marginTop:"15px", marginBottom:"20px"}}>
        <a href="https://pt-br.facebook.com/" className="facebook" aria-label="Facebook">
          <img src={face} alt="" style={{width:"23px", height:"23px"}}/>
        </a>

        <a href="https://www.instagram.com/" className="instagram" aria-label="Instagram">
          <img src={insta} alt="" style={{width:"23px", height:"23px"}} />
        </a>

        <a href="https://x.com/?lang=pt" className="twitter" aria-label="Twitter">
          <img src={twtr} alt="" style={{width:"23px", height:"23px"}} />
        </a>
      </div>
    </div>

    <div className="informacao" style={{display:"flex" , gap:"50px", alignItems:"flex-start", marginTop:"50px"}}>
      <Information
        title="Informações" 
        informations={informations}
      />

      <Information
        title="Categorias" 
        informations={informations2}
      />

      <Information
        title="Contato" 
        informations={informations3}
      />
    </div>

  </div>
  <hr />
 <p style={{textAlign:"center",marginTop:"10px", color:"#fff"}}>&copy; 2026  <span>  Digital Store</span></p>
</footer>
        );
      }


export default Footer;