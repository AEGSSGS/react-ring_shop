import React from 'react'
import obj from './data'
export default function Shop_card() {
        return (
                <>
                        {obj[2].shop_category.map((items, index) => {
                                return (
                                        <div className="shop__card">
                                                <img src={items.shop} alt="" className="card__img" />
                                                <h3 className="card__title">{items.title}</h3>
                                        </div>
                                )
                        })}
                </>
        )
}
