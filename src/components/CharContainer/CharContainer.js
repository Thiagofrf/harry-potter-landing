import './style.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CharCard from '../CharCard/CharCard'

const CharContainer = () => {

    const [charList, setCharList] = useState([])

    const getCharList = async () => {
        const url = 'https://hp-api.onrender.com/api/characters'
        try {
            const response = await axios.get(url);
            setCharList(response.data)
        } catch (error) {
            console.error('ERROR: ', error)
        }
    }

    useEffect(() => {
        getCharList()
    }, [])

    return (
        <div className='hp-charContainer'>
            <h2>
                Os personagens
            </h2>
            <div className='hp-charContainer__charList'>
                {charList.slice(0, 12).map((item, index) => {
                    return (
                        <CharCard
                            image={item.image}
                            name={item.name}
                            birthDate={item.dateOfBirth}
                            house={item.house}
                            patronus={item.patronus}
                            actor={item.actor}
                            alive={item.alive}
                            key={index}/>
                    )
                })}
            </div>
           
        </div>
    )
}

export default CharContainer