import React from 'react'
import Card from './Card'
import iconClose from './../assets/icon_close.png';

const Popup = ({title='', img='', close=()=>{}, body=null}) => {
console.log("Titll = > ", title)
    // close button style
    const btnStyle = {
        aspectRation: '1/1',
        height: '25px'
    }

    return (
        <div className='position-fixed top-0 start-0 w-100 h-100' style={{ backgroundColor: '#E8E8E8', zIndex: '100' }}>
            <div className='d-flex justify-content-center align-items-center  h-100 w-100'>
                <Card
                    title={
                        <div className='d-flex'>
                            <div className='d-flex w-75 pt-2 justify-content-start'>
                                <h5>{title}</h5>
                            </div>  

                            <div className='d-flex w-25 justify-content-end'>
                                <button
                                    className='btn shadow-none'
                                    onClick={() => {close()}}
                                >
                                    <img className='text-decoration-none' src={iconClose} alt='Close' style={btnStyle} />
                                </button>
                            </div>
                        </div>
                    }
                >
                    {body && (body)}
                </Card>
            </div>
        </div>
    )
}

export default Popup
