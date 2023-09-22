import React from 'react'
import obj from './data'
export default function Info_Item() {
        return (
                <>
                        {obj[1].Info_Item.map((items , index)=>{
                                return(
                                        <div className="message" key={index}>

                                                <img src={items.info_img} alt="" className="flex" />

                                                <h3 className="message__title">
                                                        DIALOGUE BETWEEN CLIENT
                                                        AND CRAFTSMAN
                                                </h3>
                                        </div>
                                )
                        })}
                </>
        )
}
