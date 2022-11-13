import React from 'react'
import "./Body.css"
import Data from "./example_data.json"

function Body() {
  return (
    <div className='Body'>
        <div className='Barbody' >
            <h3 className='Name-Bar'>Place Lise</h3>
            <h3 className='Search-Bar'>Search</h3>
            <h3 className='Spce-Bar'>|</h3>
            <h3 className='Lise-Bar'>Lise All</h3>
        </div>
        {Data.map(d => (
            <section className='Content' key={d.id}>
            <div className='Information'>
                <div className='Imglogo'>
                    <img src={d.profile_image_url} alt='' />
                </div>
                <div className='Name'>
                    <h5>{d.name}</h5>
                    <div className='Time'>
                        <h7>{d.operation_time[0].time_open} - {d.operation_time[0].time_close}</h7>
                        <h7 className='rate'>{d.rating}</h7>
                    </div>
                </div>
            </div>
            
            <div className='Images'>
                <img src={d.images[0]} alt=''></img>
                <img src={d.images[1]} alt=''></img>
                <img src={d.images[2]} alt=''></img>
            </div>
        </section>
        ))}
    </div>
  )
}

export default Body