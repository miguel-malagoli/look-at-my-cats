// Import React
import React from 'react';
// Import constants
import CATS, { Cat } from '../constants/cats/cats';
// Import components
import Logo from './Logo';

// Home component
const Home = () => {
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
            <h1 className="home__prompt">
                Which <span className="home__highlight">cat</span> will
                you <span className="home__highlight">look at?</span>
            </h1>
            <div className="home__feedback">
                {CATS.map((cat: Cat, index: number) => { return (
                    <p className="home__name" key={cat.name}>
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
                        <button className="home__button">
                            <img
                                className="home__photo"
                                src={cat.profileImg1}
                                alt={cat.name}
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