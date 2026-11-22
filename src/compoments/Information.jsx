function Information({ title, informations }) {
    return (
        <div className="information" style={{color:"#fff", marginLeft:"50px" ,paddingBottom:"35px" }}>
        <h3>{title}</h3>
  
        <ul style={{paddingTop:"10px"}}>
          {informations.map((item, index) => (
            <li key={index} style={{listStyle:"none",}}>
              <a href={item.link} style={{color:"#fff", textDecoration:"none"}}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Information;