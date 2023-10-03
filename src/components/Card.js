import React, {useState} from 'react'

function Card({hog}) {
    const [displayDetails, setDisplayDetails] = useState(false)

    function handleClick() {
        setDisplayDetails((displayDetails) => !displayDetails)
    }
    
    return (
        <div className='pigTile'>
            <h3>{hog.name}</h3>
            <img className='pigImage' src={hog.image} alt='Pig pic'/>
            <p onClick={handleClick}>details</p>
            {displayDetails && <p>{hog.specialty}</p>}
            {displayDetails && <p>{hog.weight}</p>}
            {displayDetails && <p>{hog.greased ? 'Greased!' : 'Not greased!'}</p>}
            {displayDetails && <p>{hog['highest medal achieved']}</p>}

        </div>
    )
}

export default Card