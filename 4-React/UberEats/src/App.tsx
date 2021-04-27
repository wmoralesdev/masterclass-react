// Contener toda la applicacion -> Inyectar en index.tsx a #root
import React, { FunctionComponent } from 'react'
import Card from './Components/Card'

import content from './Content/restaurants'

// Componente
const App: FunctionComponent = () => {
    return(
        <>
            {
                content.map((e, index) =>
                    <Card title={ e.title } promo={ e.promo } waitTime={ e.waitTime } rating={ e.rating } img={ e.img }/>)
            }
        </>
    )
}

export default App