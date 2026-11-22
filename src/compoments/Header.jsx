import { NavLink } from "react-router-dom";
import carrinho from "../assets/mini-cart.svg"
import icoLupa from "../assets/procurar.png";
import Logo from "./Logo";
import "../App.css"


function Header(){

    return(       
 
<header style={{
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",
    marginTop:"40px",
    marginLeft:"40px",
      with:"100%",
      marginBottom:"15px",
    
   
}}>

    {/* Logo e elementos ao lado */}
    <div style={{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:"30px"
    }}>

         <Logo style={{width:"253px", height:"44px"}}/> 

        <input
            style={{
                display: "flex",
                flex: "1",
                minWidth: "350px",
                width: "100%",
                padding: "8px 35px 8px 8px",
                border: "1px solid #ccc",              
               backgroundImage: `url(${ icoLupa})`,
               backgroundRepeat: "no-repeat",
               backgroundPosition: "right 10px center",
               backgroundSize: "18px 18px",
               marginLeft: "7px",
               boxSizing: "border-box"
            }}
            type="text"
            placeholder="O que você procura?"
        />

        <div class="usuario" style={{
            display:"flex",
            alignItems:"center",
            gap:"25px"
           
        }}>
            <a href="#" style={{
               color:"var(--dark-gray-2)",                
                fontSize:"16px",
                paddingLeft:"10px"
            }}>Cadastre-se</a>

            <a href="#" class="btn-entrar" style={{
                display:"flex",
                color:"white",
                justifyContent:"center",
                alignItems:"center",
                width:"114px",
                height:"40px",
                borderRadius:"4px",
                fontSize:"14px",
                fontWeight:"bold",
                textDecoration:"none",               
                backgroundColor:"var(--primary)",
            }}>Entrar</a>
        </div>

        <div class="carrinho" >
            <a href="/product/:id">
                <img src={carrinho}/>
            </a>
        </div>

    </div>

    {/* Navbar abaixo da logo */}
    <nav class="navbar" style={{
        display:"flex",
        flexDirection:"row",
        gap:"26px",
        alignItems:"center",
        width:"fit-content",
        marginTop:"20px",
        padding:"10px 25px 10px ",
        borderRadius:"6px",        
        marginBottom:"10px"
        
    }}>
        <NavLink to="/" style={{textDecoration:"none"}}>Home</NavLink>

        <NavLink to="/produtos" style={{textDecoration:"none"}}>Produtos</NavLink>

        <NavLink to="#" style={{textDecoration:"none"}}>Categorias</NavLink>

        <NavLink to="#" style={{textDecoration:"none"}}>Meus Pedidos</NavLink>
      </nav>


</header>

    );


}
export default Header;