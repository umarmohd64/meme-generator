import React, { useState, useEffect } from "react"


export default function Form(){

        const[meme, setMemeData]=useState(
            {
                topText:"",
                bottomText:"",
                randomImage:"dotted-sample-removebg-preview.png"
            }
        )

        const [allMemes, setAllMemes] =useState([])
    
        useEffect(() => {
            fetch("https://api.imgflip.com/get_memes")
                .then(res => res.json())
                .then(data => setAllMemes(data.data.memes))
        }, [])

        function getMemeImage() {
            const memesArray = allMemes
            const randomNumber = Math.floor(Math.random() * memesArray.length)
            const url = memesArray[randomNumber].url
            setMemeData(prevMeme => ({
                ...prevMeme,
                randomImage: url
            }))
            
        }

        function handleChange(event){
            const {name,value}=event.target 
            setMemeData( prevMeme => {
                return {
                    ...prevMeme,
                    [name]:value
                }
            } )
        }
        
        return(
        <main>
             < div className="form">
            <div className="form-inputs">

            <input 
            className="input-text" 
            type="text" 
            placeholder="First meme text here..." 
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            
            />
           

            <input className="input-text" 
            type="text" 
            placeholder="Second meme text here..." 
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            
            />
                
                
                 </div>

         
           

            <button 
            className="meme-button" onClick={getMemeImage} > Get a new Meme Image! </button>
        
          </div>

          <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>


        </main>

       
        
       
        
    )
}