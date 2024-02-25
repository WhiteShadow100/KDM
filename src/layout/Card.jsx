import React from 'react'

export const CARD_TYPE = {
    THUMBNAIL: 'thumbnail',
    BASIC: "basic"
}

export const CARD_SIZE = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large'
}

const Card = ({type=CARD_TYPE.BASIC, icon='', alt='', size=CARD_SIZE.SMALL, title=null, description=null, children=null}) => {

    function getCardSize(){
        switch(size)
        {
            case CARD_SIZE.SMALL: {
                return '5rem'
            }
            case CARD_SIZE.MEDIUM: {
                return '10rem'
            }
            case CARD_SIZE.LARGE: {
                return '15rem'
            }
            default: {
                return ''
            }
        }

    }

    switch(type){
        case CARD_TYPE.THUMBNAIL: {
            return (
                <div className="card" style={{width: getCardSize()}}>
                    <img src={icon} className="card-img-top p-5" alt={alt} style={{aspectRatio: '1/1'}} />
                    <div className="card-body">
                        <b>{title && <h5 className="card-title">{title}</h5>}</b>
                        {description && <p className="card-text">{description}</p>}
                    </div>
                </div>
            )
        }
        case CARD_TYPE.BASIC: {
            return (
                <div className='d-flex justify-content-center align-items-center h-100 w-100'>
                    <div className='h-75 w-75'>
                        <div className="card">
                            {(<span className="card-header fw-bold">{(title || '')}</span>)}
                            <div className="card-body" style={{ maxHeight: '60vh', overflow: 'scroll' }}>
                                {children && (children)}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        default: {
            return (<></>)
        }
    }
    
  
}

export default Card
