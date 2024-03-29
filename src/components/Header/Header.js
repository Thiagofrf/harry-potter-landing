import './style.scss'
import Logo from '../../assets/hogwarts-icon.png'

const Header = () => {
    return (
        <header className="hp-header">
            <div className='hp-header__logo'>
                <img src={Logo} alt='Harry Potter - Símbolo da casa Grifinória'/>
            </div>
            <div className='hp-header__links'>
                <a className='hp-header__links--item' href='#houses'>
                    Casas
                </a>
                <a className='hp-header__links--item' href='#characters'>
                    Personagens
                </a>
            </div>
        </header>
    )
}

export default Header