import React from 'react'
import Shop_card from './Shop_card'
export default function Shop_category() {
  return (
    <>
        <section className="shop__category">
                <div className="container shop__container">
                        <h2 className="shop__title">
                                shop by category
                        </h2>
                        <div className="shop__main-card">
                                <Shop_card/>
                        </div>
                </div>
        </section>
    </>
  )
}
