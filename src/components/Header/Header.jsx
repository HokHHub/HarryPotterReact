import './Header.css'
import Container from '/src/components/Container/Container'

export default function Header(props) {
    let check = (tg) => {
        if (tg == 'Choose One') {
            return ''
        } else {
            return tg
        }
    }

    if (props.page == 'main') {
        return (

            <>
                <header className="header">
                    <Container>
                        <h1 className="header__title">Harry Potter</h1>
                        <p className="header__text">View all characters from the Harry Potter universe</p>
                        <div className="search">
                            <div className="search__texts texts">
                                <p className="texts__filter">Name</p>
                                <p className="texts__filter texts__filter_last">School</p>

                            </div>
                            <form className="form" action="POST">
                                <input onKeyUp={(event) => (props.setSearch(event.target.value))} className="form__input" type="text" placeholder="Hermione" id="input" />
                                <div>
                                    <p className="texts__filter texts__filter_mobile">School</p>
                                    <select onChange={(event) => (props.setFilter(check(event.target.value)))} className="form__select" name="selectSchool" id="" defaultValue="Choose One">
                                        <option data-value="" defaultValue="">Choose One</option>
                                        <option data-value="Gryffindor" defaultValue="Gryffindor">Gryffindor</option>
                                        <option data-value="Hufflepuff" defaultValue="Hufflepuff">Hufflepuff</option>
                                        <option data-value="Ravenclaw" defaultValue="Ravenclaw">Ravenclaw</option>
                                        <option data-value="Slytherin" defaultValue="Slytherin">Slytherin</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </Container>
                    <hr className="header__hr" />
                </header>
            </>
        )
    } else if (props.page == 'liked') {
        return (
            <>
                <header className="header__liked">
                    <Container>
                        <a onClick={() => { props.setPage('main') }} className="return__link">← Back To All</a>
                        <h1 className="header__title_liked">Liked ones</h1>
                        <p className="header__text">Your favorite characters from the Harry Potter universe.</p>
                    </Container>
                    <hr className="header__hr" />
                </header>
            </>
        )
    }
}