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
                Which <span className="home__prompt_highlight">cat</span> will
                you <span className="home__prompt_highlight">look at?</span>
            </h1>
            <ul className="home__list">
                {CATS.map((cat: Cat, index: number) => { return (
                    <li key={cat.name} className="cat">
                        <button className="cat__item">
                            <img
                                className="cat__photo"
                                src={cat.profileImg1}
                                alt={cat.name}
                            />
                            <div className="cat__fade">
                                <p className="cat__name">
                                    {cat.name.substr(0, 1)}
                                    <span className="cat__letter">
                                        {cat.name.substr(1, 1)}
                                    </span>
                                    {cat.name.substr(2)}
                                </p>
                            </div>
                        </button>
                    </li>
                );})}
            </ul>
        </main>
    );
};
// Exports
export default Home;