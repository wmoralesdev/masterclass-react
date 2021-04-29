// Contener toda la applicacion -> Inyectar en index.tsx a #root
import React, { FunctionComponent } from 'react'

import Card from './Components/Card'
import Navbar from './Components/Navbar'

import content from './Content/restaurants'

// Componente
const App: FunctionComponent = () => {
    return(
        <>
            <Navbar />
            <div className="flex flex-row flex-wrap lg:flex-nowrap lg:overflow-x-scroll max-w-screen-xl mx-auto">
            {
                content.map((e, index) =>
                    <Card title={ e.title } promo={ e.promo } waitTime={ e.waitTime } rating={ e.rating } img={ e.img }/>)
            }
            </div>
        </>
    )
}

export default App