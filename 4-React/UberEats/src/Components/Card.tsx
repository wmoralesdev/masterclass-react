import React, { FunctionComponent, useState } from 'react'
import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as EmptyHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

interface CardProps {
    title: string,
    waitTime: string,
    img: string,
    rating: number,
    promo?: string
}

// POO -> Atributos de una clase -> Variables o elementos que caracterizan y diferencian elementos entre si

const Card: FunctionComponent<CardProps> = ({ title, waitTime, img, rating, promo }) => {
    const [ fav, setFav ] = useState(false)

    return(
        <div className="w-full px-4 py-4 flex-shrink-0 flex flex-wrap justify-between items-center relative md:w-1/2 xl:w-1/3">
            <Icon 
            icon={ !fav ? EmptyHeart : SolidHeart } 
            onClick={ () => setFav(!fav) }
            className={`stroke-current ${ fav ? "text-red-500" : "text-white" } absolute right-7 top-7`} />
            <img src={img} alt="" className="h-32 w-full object-cover"/>
            <div>
                <h1 className="font-bold py-1">{ title }</h1>
                <p className="text-xs text-gray-700">{ waitTime }</p>
            </div>
            <div className="bg-gray-300 p-1 h-6 w-6 rounded-full text-xxs flex justify-center items-center">
                <span className="p-1">{ rating }</span>
            </div>
            {
                !promo ? null : 
                <h2 className="absolute top-7 bg-green-600 text-white font-medium text-xs px-3 rounded-r-lg">
                    { promo }
                </h2>
            }
        </div>
    )
}

export default Card