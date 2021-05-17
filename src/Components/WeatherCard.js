import React from 'react'
import {Card} from 'react-bootstrap';

const WeatherCard = ({dt, temp_min, temp_max, main, icon}) => {
    const date = new Date(dt)
    return(
        <div>
            <Card style={{width: '18rem'}}>
                <Card.Img variant='top' src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
                <Card.Body>
                    <Card.Title>{main}</Card.Title>
                    <p>
                        {date.toLocaleDateString()} - {date.toLocaleTimeString()}
                    </p>
                    <p>Min: {temp_min}</p>
                    <p>Max: {temp_max}</p>
                </Card.Body>
            </Card>
        </div>
    )
}

export default WeatherCard