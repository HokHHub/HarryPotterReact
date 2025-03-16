import './MainBlock.css'
import Container from '/src/components/Container/Container'
import { data } from '/src/data.js'
import Card from '/src/components/Card/Card.jsx'
import { useEffect } from 'react'
import { useState } from 'react'

export default function MainBlock(props) {
    let [empty, setEmpty] = useState(false)

    useEffect(() => {
        function handleScroll() {
            if (
                !props.loading && window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
            ) {
                props.setLoading(true)

                props.setVisibleCount((prev) => Math.min(prev + props.newContent, data.length))
                props.setLoading(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [data.length, props.loading])
    if (props.page == 'main') {
        return (
            <>
                <div className="main-block">
                    <Container>
                        <div className="cards">
                            {data.slice(0, props.visibleCount).map((el) => (
                                ((String(el.name).toLowerCase().includes(props.search.toLowerCase()) && props.search != '') && (String(el.house).toLowerCase().includes(props.filter.toLowerCase())) && props.search != '') &&
                                <Card key={el.id} name={el.name}
                                    actor={el.actor}
                                    gender={el.gender}
                                    house={el.house}
                                    wand={el.wand.core}
                                    alive={String(el.alive)}
                                    img={el.image ? el.image : 'https://vmulebki.gosuslugi.ru/netcat_files/9/148/1.jpg'} />
                            ))}
                            {data.slice(0, props.visibleCount).map((el) => (
                                ((el.house.toLowerCase().includes(props.filter.toLowerCase())) && String(props.search) == '') &&
                                <Card key={el.id} name={el.name}
                                    actor={el.actor}
                                    gender={el.gender}
                                    house={el.house}
                                    wand={el.wand.core}
                                    alive={String(el.alive)}
                                    img={el.image ? el.image : 'https://vmulebki.gosuslugi.ru/netcat_files/9/148/1.jpg'} />
                            ))}
                            {data.slice(0, props.visibleCount).map((el) => (
                                ((String(props.filter.toLowerCase()) == '' && props.search == '')) &&
                                <Card key={el.id} name={el.name}
                                    actor={el.actor}
                                    gender={el.gender}
                                    house={el.house}
                                    wand={el.wand.core}
                                    alive={String(el.alive)}
                                    img={el.image ? el.image : 'https://vmulebki.gosuslugi.ru/netcat_files/9/148/1.jpg'} />
                            ))}

                        </div>
                    </Container>
                    <button onClick={() => { props.setPage('liked') }} className='toLiked'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none"> <path fillRule="evenodd" clipRule="evenodd" d="M11.9997 1.97108C18.6567 -4.87192 35.3007 7.10258 11.9997 22.5001C-11.3013 7.10408 5.34267 -4.87192 11.9997 1.97108Z" fill="#DC3545" /> </svg>
                        Show Liked
                    </button>
                </div>
            </>
        )
    } else if (props.page == 'liked' && localStorage.cards != undefined && JSON.parse(localStorage.cards).length != 0) {
        return (
            <div className="main-block">
                <Container>
                    <div className="cards__liked">
                        {data.slice(0, props.visibleCount).map((el) => (
                            (localStorage.getItem('cards') != undefined) && (JSON.parse(localStorage.getItem('cards')).map((localElement) => (
                                el.name == localElement &&
                                <Card key={el.id} name={el.name}
                                    actor={el.actor}
                                    gender={el.gender}
                                    house={el.house}
                                    wand={el.wand.core}
                                    alive={String(el.alive)}
                                    img={el.image ? el.image : 'https://vmulebki.gosuslugi.ru/netcat_files/9/148/1.jpg'} onceDelete={true} setEmpty={setEmpty} />
                            )))
                        ))}
                    </div>
                </Container>
            </div>
        )
    } else if (props.page == 'liked' && (localStorage.cards == undefined) || empty) {
        return (
            <div className="main-block">
                <Container>
                    <p style={{ 'color': 'black', 'fontSize': '32px' }}>You haven't liked anything yet</p>
                </Container>
            </div>
        )
    } else if (props.page == 'liked' && localStorage.cards != undefined && (JSON.parse(localStorage.cards).length == 0) || empty) {
        return (
            <div className="main-block">
                <Container>
                    <p style={{ 'color': 'black', 'fontSize': '32px' }}>You haven't liked anything yet</p>
                </Container>
            </div>
        )
    }
}