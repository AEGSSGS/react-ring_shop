import React from 'react'
import Btn from './Btn'
export default function Hero_section() {
  return (
    <>
        <section className="hero__section">
                <div className="container section__container">
                        <div className="text__box">
                                <h1 className="section__title">
                                        A guide to the different engagement ring settings
                                </h1>
                               <Btn>Book appointment</Btn>
                        </div>
                </div>
        </section>
    </>
  )
}
