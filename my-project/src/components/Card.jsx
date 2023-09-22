import React from 'react'
import obj from './data'
export default function Card() {
        return (
                <>
                        {obj[0].card.map((items , index) => {
                                return (
                                        <div className="Solitaire-setting" key={index}>
                                                <h2 className="Solitaire__title">
                                                        {items.title}
                                                </h2>
                                                <img src={items.img} alt="solitaire__img" className="solitaire__img" />
                                                <p className="Solitaire__text">
                                                        {items.text}
                                                </p>
                                                <a href="" className="Btn solitaire__btn">
                                                        {items.btn}
                                                </a>
                                        </div>
                                )
                        })}
                </>
        )
}
