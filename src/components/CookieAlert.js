import React, { useEffect, useState } from "react";

const CookieAlert = ({ 
    backgroundColor,
    position,
    margin,
    height,
    display,
    alignItems,
    justifyContent,
    lineHeight,
    fontSize, 
    textColor, 
    cookieText,    
}) => {
    
    const [show, setShow] = useState(true);

    
    const headerStyles = {
        backgroundColor: backgroundColor,
        position: position,
        margin: margin,
        height: height,
        display: display,
        alignItems: alignItems,
        justifyContent: justifyContent,
    }

    const paragraphStyles = {
        position: position,
        color: textColor,
        fontSize: fontSize,
        lineHeight: lineHeight,        
    }

    //const closeButton = {
        //border: border,
        //transform: transform,
   // }

return (
    <section style={headerStyles}>
        <p style={paragraphStyles}>{cookieText}</p>
        {/*<button onClick={() => setShow((prev) => !prev)}>{closeButton}</button>*/}
    </section>
    );
};

export default CookieAlert;

