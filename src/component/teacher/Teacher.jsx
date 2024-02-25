import React, { useState } from "react";
import createIcon from './../../assets/icon_create.png'
import listIcon from './../../assets/icon_list.png'
import Card, { CARD_SIZE, CARD_TYPE } from "../../layout/Card";
import Popup from "../../layout/Popup";
import Add from "./component/Add";
import View from "./component/View";

const Teacher = () => {

    // hold spopup component
    const [popupComponent, setPopupComponent] = useState(<></>)

    // defining style for pop-up buttons
    const STYLE = {
        cursor: 'pointer'
    }

    // defining popup options
    const POPUP = {
        ADD: 'add',
        VIEW: 'view'
    }

    // shows pop-up
    function showPopup(type) {
        setPopupComponent(pre => {

            switch (type){
                case POPUP.ADD: {
                    return (
                        <Popup 
                            title={'Add Teacher'}
                            body={<Add />}
                            close={closePopup}
                        />
                    )
                }
                case POPUP.VIEW: {
                    return (
                        <Popup 
                            title={'View Teacher'}
                            body={<View />}
                            close={closePopup}
                        />
                    )
                }
                default: {
                    
                }
            }
        })
    }

    // closes popup
    function closePopup(){
        setPopupComponent(<></>)
    }


    return (
        <>
            {popupComponent}
            <div className="form-container">
                <div className="row">
                    <div
                        className="col-6"
                        style={STYLE}
                        onClick={() => {
                            showPopup(POPUP.ADD)
                        }}
                    >
                        <Card type={CARD_TYPE.THUMBNAIL} icon={createIcon} alt='Add Teacher' size={CARD_SIZE.MEDIUM} title='Add Teacher' />
                    </div>

                    <div
                        className="col-6"
                        style={STYLE}
                        onClick={() => {
                            showPopup(POPUP.VIEW)
                        }}
                    >
                        <Card type={CARD_TYPE.THUMBNAIL} icon={listIcon} alt='View Teacher' size={CARD_SIZE.MEDIUM} title='View Teacher' />
                    </div>
                </div>
            </div>
        </>
    );

};

export default Teacher;
