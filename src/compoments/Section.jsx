import React from "react";
import "../assets/Section.css"

function Section({title, titleAlign = "left", link,children }){

return(

   <section className="section">

      <h2 className={`section-title ${titleAlign}`} style={{ color:"var(--dark-gray-2)",fontSize:"24px",  marginBottom:"15px", marginLeft:"28px"}}>
        {title}
      </h2>
      <div className="link">
      {link && (
          <a href={link.href}>
            {link.text}
          </a>
        )}
        </div>

      <div className="section-content">
        {children}
      </div>

    </section>
   
);



}
export default Section;
