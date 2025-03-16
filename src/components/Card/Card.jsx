import './Card.css'
import '/src/components/Container.css'
import { useState } from 'react'
let save = []


export default function Card(props) {
    let [className, setClassName] = useState('')

    function CheckLike(fill) {
        let flag = fill ? true : false
        for (let index = 0; index < save.length; index++) {
            if (save[index] == props.name) {
                flag = fill ? false : true
            }
        }
        return flag
    }

    if (localStorage.getItem('cards') != undefined) {
        save = JSON.parse(localStorage.getItem('cards'))
    }

    return (
        <>
            <article className="cards__card card">
                <img className="card__img" src={props.img} alt={props.name} />
                <svg className='card__like' width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g onClick={(event) => {
                        if (!props.onceDelete) {
                            let flag = true
                            for (let index = 0; index < save.length; index++) {
                                if (save[index] == props.name) {
                                    save.splice(index, 1)
                                    flag = false
                                }
                            }
                            flag && save.push(props.name)
                            localStorage.setItem('cards', JSON.stringify(save))
                            flag ? setClassName('path') : setClassName('unpath')
                            !flag && CheckLike(false)
                        } else {
                            let flag = true
                            for (let index = 0; index < save.length; index++) {
                                if (save[index] == props.name) {
                                    save.splice(index, 1)
                                    flag = false
                                }
                            }
                            flag && save.push(props.name)
                            localStorage.setItem('cards', JSON.stringify(save))
                            flag ? setClassName('path') : setClassName('unpath')
                            !flag && CheckLike(false)
                            event.target.closest('article').style.display = 'none'
                            if (JSON.parse(localStorage.cards).length == 0) {
                                props.setEmpty(true)
                            }

                        }


                    }} id="Group-1">
                        <g id="Ellipse 1" filter="url(#filter0_d_2536_1008)">
                            <circle cx="59" cy="51" r="24" fill="white" />
                        </g>
                        <path className={className} id="Vector" fillRule="evenodd" clipRule="evenodd" d="M58.9997 41.9711C65.6567 35.1281 82.3007 47.1026 58.9997 62.5001C35.6987 47.1041 52.3427 35.1281 58.9997 41.9711Z" fill={CheckLike(false) ? '#DC3545' : 'none'} stroke={CheckLike(true) ? '#DC3545' : 'none'} />
                    </g>
                    <defs>
                        <filter id="filter0_d_2536_1008" x="0" y="0" width="118" height="118" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="8" />
                            <feGaussianBlur stdDeviation="17.5" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2536_1008" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2536_1008" result="shape" />
                        </filter>
                    </defs>
                </svg>
                <p className="card__text">
                    <span className="card__text_name">{props.name}</span><br />
                    Actor: {props.actor} <br />
                    Gender: {props.gender} <br />
                    House: {props.house} <br />
                    Wand core: {props.wand} <br />
                    Alive: {props.alive}
                </p>
            </article >
        </>
    )
}