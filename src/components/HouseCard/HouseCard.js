import './style.scss'

const HouseCard = ({title, icon, description, customClass}) => {
    return (
        <div className={`hp-houseCard hp-houseCard--${customClass}`}>
            <p className='hp-houseCard__title'>
                {title}
            </p>
            <img className='hp-houseCard__image' src={icon} alt="House emblem"/>
            <p className='hp-houseCard__description'>
                {description}
            </p>
        </div>
    )
}

export default HouseCard