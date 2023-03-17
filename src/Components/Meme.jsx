import React from 'react';
import memesData from "../memesData";

const Meme = () => {
    const [image, setImage] = React.useState('');


    const handleClick = () => {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setImage(memesArray[randomNumber].url);
    }

    return (
        <main>
            <div className="container">
                <div className="form">
                    <input 
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                    />
                    <input 
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                    />
                    <button 
                        className="form--button"
                        onClick={handleClick}
                    >
                        Get a new meme image 🖼
                    </button>
                    <img src={image} alt='memes-images'/>
                </div>
            </div>
        </main>
    )
}

export default Meme