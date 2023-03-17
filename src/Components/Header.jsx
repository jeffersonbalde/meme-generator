
import trollface from '../assets/images/troll_face.png';

const Header = () => {
    return (
        <div className='container'>
            <nav className='nav'>
            <img clasName='trollFace' src={trollface} alt="troll face"/>
            <h3 className='meme-generator'>Meme Generator</h3>
            <p className='react-course'>React Course - Project 3</p>
        </nav>
        </div>
    )
}

export default Header