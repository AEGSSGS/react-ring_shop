import React from 'react'
import Card from './Card'
export default function Card_section() {
  return (
    <>
        <section className="Settings">
                <div className="hero-container setting__container">
                        <center className="center main-center">
                                <p className="setting__text">The setting of your engagement ring is one of the most
                                        important
                                        considerations when shopping for this jewel that will represent the love you
                                        share for many years to come. It determines the design and aesthetic more than
                                        any other factor while at the same time securing the stones firmly in place.
                                </p>
                                <p className="setting__text">

                                        Discover the different types of engagement ring setting at Budrevich, each of
                                        which brings a diamond or coloured stone to life in its own unique way.
                                </p>

                        </center>
                        <center className="center hero-center">
                               <Card/>


                                
                        </center>


                </div>
        </section>

    </>
  )
}
