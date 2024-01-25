import './style.scss'
import HouseCard from '../HouseCard/HouseCard'
import HouseData from './houses.data'

const HousesContainer = () => {
    return (
        <div className='hp-housesContainer' id='houses'>
            <h2>
                As casas de Hogwarts
            </h2>
            <div className='hp-housesContainer__cards'>
                {HouseData.map((item, index) => {
                    return (
                        <HouseCard 
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            customClass={item.customClass}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default HousesContainer