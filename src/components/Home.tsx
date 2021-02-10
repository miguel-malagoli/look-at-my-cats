// Import React
import React, { useContext, useState } from 'react';
// Import constants
import CATS, { Cat } from '../constants/cats';
import LangContext, { HOME_TEXT } from '../constants/lang';
// Import components
import Logo from './Logo';

// Home component
const Home = (props: {handleCat: (index: number) => void}) => {
    // Context Hooks
    const lang = useContext(LangContext);
    // State Hooks
    const [hoverItem, setHoverItem] = useState(-1);
    // Render
    return (
        <main className="home">
            <div className="home__title">
                <Logo
                    className="home__logo"
                    colorOne="dark"
                    colorTwo="primary"
                    alt="Look At My Cats"
                />
            </div>
            <h1 className={'home__prompt' + ((hoverItem < 0 || hoverItem >= CATS.length) ? '' : ' home__prompt_hidden')}>
                {HOME_TEXT[lang].prompt.first + ' '}
                <span className="home__highlight">{HOME_TEXT[lang].prompt.second + ' '}</span>
                {HOME_TEXT[lang].prompt.third + ' '}
                <span className="home__highlight">{HOME_TEXT[lang].prompt.fourth}</span>
            </h1>
            <div className="home__feedback">
                {CATS.map((cat: Cat, index: number) => { return (
                    <p className={'home__name' + (index === hoverItem ? ' home__name_visible' : '')} key={cat.name}>
                        {cat.name.substr(0, 1)}
                        <span className="home__highlight">
                            {cat.name.substr(1, 1)}
                        </span>
                        {cat.name.substr(2)}
                    </p>
                );})}
            </div>
            <ul className="home__list">
                {CATS.map((cat: Cat, index: number) => { return (
                    <li key={cat.name} className="home__item">
                        <button
                            className="home__button"
                            onMouseEnter={() => {setHoverItem(index)}}
                            onFocus={() => {setHoverItem(index)}}
                            onMouseLeave={() => {setHoverItem(-1)}}
                            onBlur={() => {setHoverItem(-1)}}
                            onClick={() => {props.handleCat(index)}}
                            >
                            <img
                                className="home__photo"
                                src={cat.profileImg1}
                                alt={cat.profileAlt1[lang]}
                            />
                        </button>
                        <div className="home__fade">
                            <p className="home__name">
                                {cat.name.substr(0, 1)}
                                <span className="home__highlight">
                                    {cat.name.substr(1, 1)}
                                </span>
                                {cat.name.substr(2)}
                            </p>
                        </div>
                    </li>
                );})}
            </ul>
        </main>
    );
};
// Exports
export default Home;