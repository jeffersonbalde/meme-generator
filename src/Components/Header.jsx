
import trollFace from '../assets/images/troll_face.png';

const Header = () => {
    return (
        <div className='container'>
            <header className="header">
                <img 
                    src={trollFace}
                    className="header--image"
                />
                <h2 className="header--title">Meme Generator</h2>
                <h4 className="header--project">React Course - Project 3</h4>
            </header>
        </div>
    )
}

export default Header