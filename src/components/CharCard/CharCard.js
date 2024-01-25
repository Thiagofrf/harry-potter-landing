import './style.scss'

const CharCard = ({image, name, birthDate, house, patronus, actor, alive }) => {
    return (
        <div className="hp-charCard">
            <div className="hp-charCard--container">
                <span 
                    className='hp-charCard__image' 
                    style={{backgroundImage :  `url(${image})`}}
                />
                <p className='hp-charCard__name'>
                    {name}
                </p>
                <p className='hp-charCard__house' data-house={house}>
                    {house}
                </p>
                <div className='hp-charCard__moreInfo'>
                    <div>
                        <p>
                            Nascido em
                        </p>
                        <p>
                            {birthDate === null ? 'Não especificado' : birthDate}
                        </p>
                    </div>
                    <div>
                        <p>
                            Patrono
                        </p>
                        <p>
                            {patronus === "" ? 'Não especificado' : patronus}
                        </p>
                    </div>
                    <div>
                        <p>
                            Situação do personagem
                        </p>
                        <p>
                            {alive ? 'Vivo' : 'Morto'}
                        </p>
                    </div>
                    <div>
                        <p>
                            Interpretado por
                        </p>
                        <p>
                            {actor}
                        </p>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default CharCard