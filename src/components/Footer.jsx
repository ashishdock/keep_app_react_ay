import React from "react";

function Footer(){
    const yr = new Date().getFullYear();

    return (<footer><p>Copyright &copy; {yr}</p></footer>);
}

export default Footer;