import React from "react"
import Logo from "../images/meme-logo-1.png"

export default function header(){
    return(

        <header className="head" >
            <div className="brand-props" >
                <img className="logo" src={Logo} alt="logo here" />
                <div >
                <h1 className="brand-name" >MEME GENERATOR</h1>
                <p className="tagline" >"Unleash the Laughter, One Meme at a Time!"</p>
                </div>
               

            </div>
            
            


        </header>

    )
}