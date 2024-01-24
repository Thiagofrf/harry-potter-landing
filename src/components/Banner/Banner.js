import './style.scss'
import ArrowDown from '../../assets/arrow-down.gif'

const Banner = () => {
    return (
        <div className='hp-banner'>
            <h1>
                Harry Potter Wiki
            </h1>
            <p>
                Conheça mais sobre os personagens da famosa saga Harry Potter, suas casas, atores e mais informações.
            </p>
            <img src={ArrowDown} alt="Arrow Down Icon" />
        </div>
    )
}

export default Banner