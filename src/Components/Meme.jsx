
import React from 'react';

const Meme = () => {

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    } 

    const handleChange = (e) => {
        const {name, value} = e.target
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className='container'>
            <main>
    `            <div className="form">
                    <input 
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                        value={meme.topText}
                        onChange={handleChange}
                        name="topText"
                    />
                    <input 
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                        value={meme.bottomText}
                        onChange={handleChange}
                        name="bottomText"
                    />
                    <button 
                        className="form--button"
                        onClick={getMemeImage}
                    >
                        Get a new meme image 🖼
                    </button>
                </div>
                <div className="meme">
                    <img src={meme.randomImage} className="meme--image" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </main>
        </div>
    )
}

export default Meme