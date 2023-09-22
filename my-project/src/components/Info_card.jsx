import React from 'react'
import Info_Item from './Info_Item'
export default function Info_card() {
        return (
                <>
                        <section className="info__page">
                                <div className="hero-container  info__container">
                                        <div className="info_service">
                                                <h2 className="info__title">
                                                        Why choose us?
                                                </h2>
                                                <div className="flex__box">
                                                       <Info_Item/>
                                                </div>
                                        </div>
                                </div>
                        </section>
                </>
        )
}
