import React, {useState} from 'react'
import Card from './Card'

function Cards({sortedHogs, filterGreased, sortValue}) {

    return (
       <div>
        {sortedHogs.map(hog => {
            if(!filterGreased) {
                return <Card hog={hog} key={hog.name} className='pigTile' />
            }
            else {
               if(!hog.greased) {
                return <Card hog={hog} key={hog.name} classname='pigTile' />
               }
            }
        })}
       </div> 
        
    )
}

export default Cards