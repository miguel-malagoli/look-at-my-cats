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
                                decoding="async"
                                style={{
                                    backgroundSize: "cover",
                                    backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http%3A//www.w3.org/2000/svg' xmlns%3Axlink='http%3A//www.w3.org/1999/xlink' viewBox='0 0 1280 853'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='.5'%3E%3C/feGaussianBlur%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'%3E%3C/feFuncA%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Cimage filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' xlink%3Ahref='data%3Aimage/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAIAAACepSOSAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAs0lEQVQI1wGoAFf/AImSoJSer5yjs52ktp2luJuluKOpuJefsoCNowB+kKaOm66grL+krsCnsMGrt8m1u8mzt8OVoLIAhJqzjZ2tnLLLnLHJp7fNmpyjqbPCqLrRjqO7AIeUn5ultaWtt56msaSnroZyY4mBgLq7wY6TmwCRfk2Pf1uzm2WulV+xmV6rmGyQfFm3nWSBcEIAfm46jX1FkH5Djn5AmodGo49MopBLlIRBfG8yj/dfjF5frTUAAAAASUVORK5CYII='%3E%3C/image%3E%3C/svg%3E\")"
                                }}
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