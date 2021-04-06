import React from 'react'
import { Route} from 'react-router-dom'

const PublicRoutes=({component:Component,filteredData,data,setIsAuth})=>{
    
    return (
        <Route  render={()=>(
            <Component {...filteredData} filteredData={filteredData} data={data} setIsAuth={setIsAuth}/>
        )} />
    )
}

export default PublicRoutes;