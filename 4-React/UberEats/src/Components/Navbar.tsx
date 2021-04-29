import React, { FunctionComponent, useState } from 'react'

const Navbar: FunctionComponent = () => {
    // Refrescar el UI al cambiar de valor -> Estado, state
    // Siempre que se actualiza el estado de un componente, se obliga a refrescar la UI
    // en los elementos que dependen o necesitan o consultan o utilizan el estado
    const [ selected, setSelected ] = useState(false)
    const [ hour, setHour ] = useState(new Date())

    var interval = setInterval(() => setHour(new Date()), 1000)
    
    function onOptionChanged() {
        setSelected(!selected)
    }

    return(
        <div className="my-8">
            <h3 className="text-xs space-x-2 text-center">
                <p className="font-bold py-3">La hora es: { hour.toLocaleTimeString() }</p>
                <span 
                onClick={onOptionChanged}
                className={`${selected ? "bg-black text-white " : "" }px-3 py-1 rounded-full`}>A domicilio</span>
                <span 
                onClick={onOptionChanged}
                className={`${!selected ? "bg-black text-white " : "" }px-3 py-1 rounded-full`}>Para llevar</span>
            </h3>
        </div>
    )
}

export default Navbar;