// Import React
import React, { useEffect, useState } from 'react';
// Import constants
import { Cat } from '../constants/cats/cats';
// Import components
import Logo from './Logo';

const Profile = (props: {cat: Cat}) => {
    // State Hooks
    const [expandHeader, setExpandHeader] = useState(false);
    const [expandLang, setExpandLang] = useState(false);
    const [popHeader, setPopHeader] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    // Effect Hooks
    useEffect(() => {
        // Window scroll event
        const onScroll = () => {
            setScrollTop(window.scrollY);
            setPopHeader(window.scrollY > 0 || expandHeader);
        }
        window.addEventListener('scroll', onScroll);
        // Unsubscribe
        return () => {window.removeEventListener('scroll', onScroll)};
    }, [scrollTop]);
    // Functions
    const toggleHeader = (expand: boolean = !expandHeader) => {
        if (expand === false) setExpandLang(false);
        setPopHeader(scrollTop > 0 || expand);
        setExpandHeader(expand);
    }
    // Render
    return (
        <>
        {/* HEADER Block */}
        <header className="header">
            {/* Dark screen - blocks pointer events when header is expanded on mobile */}
            <div className={'header__screen' + (expandHeader ? ' header__screen_active' : '')}></div>
            {/* Expanded header menu for mobile */}
            <div className={'header__expand' + (expandHeader ? ' header__expand_open' : '')}>
                <button
                    className="header__button"
                    tabIndex={(expandHeader ? 0 : -1)}
                    disabled={!expandHeader}
                    >
                    <svg className="header__svg" width="16" height="18" viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.318191 7.04843L7.23182 0.31012C7.65607
                        -0.103376 8.34393 -0.103376 8.76818 0.31012L15.6818 7.04843C16.1061 7.46193 16.1061 8.13234
                        15.6818 8.54584C15.2576 8.95933 14.5697 8.95933 14.1454 8.54584L9.08637
                        3.61505V18H6.91363V3.61505L1.85455 8.54584C1.4303 8.95933 0.742446 8.95933 0.318191
                        8.54584C-0.106064 8.13234 -0.106064 7.46193 0.318191 7.04843Z" />
                    </svg>
                    <p className="header__buttonText">Back to Top</p>
                </button>
                <button
                    className="header__button"
                    tabIndex={(expandHeader ? 0 : -1)}
                    disabled={!expandHeader}
                    >
                    <svg className="header__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 10.8333V19.1666H12.5V14.1666H7.5V19.1666H2.5V10.8333H0L10 0.833313L20
                        10.8333H17.5ZM16.6667 5.91081V1.66665H14.1667V3.41081L16.6667 5.91081Z" />
                    </svg>
                    <p className="header__buttonText">Back to Home</p>
                </button>
                <button
                    className="header__button"
                    onClick={() => {setExpandLang(!expandLang)}}
                    tabIndex={(expandHeader ? 0 : -1)}
                    disabled={!expandHeader}
                    >
                    <svg className="header__svg" width="22" height="20" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.164 6.42091C10.2208 6.2 10.2557 6.03364 10.2878 5.87091L9.27942 5.67636L9.1795
                        6.13091C8.83942 6.08091 8.47642 6.07545 8.11067 6.11182C8.11892 5.86818 8.13358 5.62909 8.15558
                        5.39909H9.28217V4.45182H8.29033C8.33983 4.21091 8.38108 4.06636 8.42233 3.92909L7.43783 3.63636C7.36542
                        3.87545 7.30583 4.11 7.24442 4.45182H6.1215V5.39909H7.1225C7.09592 5.70455 7.08033 6.02182 7.07575
                        6.34273C5.96933 6.74545 5.5 7.51364 5.5 8.20909C5.5 9.03091 6.1545 9.75455 7.1885 9.66182C8.47275
                        9.54545 9.33075 8.58364 9.83308 7.40091C10.3528 7.69818 10.571 8.19727 10.3748 8.66C10.1942 9.08818
                        9.65983 9.49545 8.6405 9.47455V10.4936C9.77167 10.5109 10.8845 10.0845 11.3217 9.05455C11.7471 8.04818
                        11.2603 6.94818 10.164 6.42091ZM8.8385 7.11727C8.67808 7.46909 8.46725 7.81909 8.19867 8.09455C8.15742
                        7.80091 8.129 7.48 8.11433 7.13636C8.35908 7.10455 8.60658 7.09909 8.8385 7.11727ZM7.10233 7.44636C7.12983
                        7.87636 7.17933 8.27273 7.24717 8.62636C6.33233 8.79273 6.29567 7.89818 7.10233 7.44636ZM1.83333
                        7.59273C1.83333 9.29545 2.61158 10.2682 3.37608 11.1773C3.4045 12.0864 3.454 12.6936 3.07083
                        14.0709C4.67317 13.5636 4.939 13.3636 5.82817 12.8218C6.74483 13.0436 7.17933 13.1682 8.22158
                        13.2682C8.13542 13.9118 8.14733 14.4273 8.272 15.1073C7.58267 15.0527 6.87133 14.9455 6.13617
                        14.7673C4.85558 15.5464 2.02858 16.3355 0.04125 16.69C0.784667 15.24 1.60692 13.2491 1.56383
                        11.8609C0.56375 10.6745 0 9.14727 0 7.59273C0 3.20545 4.32575 0 9.16667 0C13.9673 0 18.3122 3.16727
                        18.3315 7.56182C17.7412 7.40273 17.1197 7.31 16.4789 7.27636C16.269 4.24 13.0753 1.81818 9.16667
                        1.81818C5.12325 1.81818 1.83333 4.40909 1.83333 7.59273ZM16.1856 12.5282L16.8502 14.4136H15.5256L16.1856
                        12.5282ZM22 14.0427C22 11.1718 19.1684 9.07273 15.9995 9.07273C12.8498 9.07273 9.999 11.1573 9.999
                        14.0427C9.999 16.5882 12.4126 18.99 15.9555 18.99C16.5963 18.99 17.2755 18.9109 17.9841 18.7409C18.8219
                        19.2509 20.6727 19.7655 21.9734 20C21.4876 19.05 20.9495 17.7464 20.9761 16.8373C21.6306 16.0618 22
                        15.0609 22 14.0427ZM17.5533 16.3636L17.1353 15.2091H15.2451L14.8317 16.3636H13.75L15.6741
                        11.3636H16.6833L18.6001 16.3636H17.5533Z" />
                    </svg>
                    <p className="header__buttonText">Language</p>
                    <svg className={'header__drop' + (expandLang ? ' header__drop_open' : '')}
                    width="14" height="9" viewBox="0 0 14 9" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 9L0.0717972 -1.30507e-06L13.9282 -9.36995e-08L7 9Z"/>
                    </svg>
                </button>
                <div className={'header__langFlex' + (expandLang ? ' header__langFlex_open' : '')}>
                    <button
                        className="header__lang"
                        tabIndex={(expandLang ? 0 : -1)}
                        disabled={!expandLang}
                        >
                        Português
                    </button>
                    <button
                        className="header__lang"
                        tabIndex={(expandLang ? 0 : -1)}
                        disabled={!expandLang}
                        >
                        English
                    </button>
                </div>
            </div>
            {/* Main header portion */}
            <div className={'header__base' + (popHeader ? ' header__base_pop' : '')}>
                <Logo
                    className="header__logo"
                    colorOne="dark"
                    colorTwo="primary"
                    alt="Look At My Cats"
                />
                {/* Header buttons for large screens */}
                <div className={'header__actions' + ((expandHeader || scrollTop > 0) ? ' header__actions_open' : '')}>
                    <button
                        className="header__button"
                        tabIndex={(expandHeader || scrollTop > 0) ? 0 : -1}
                        disabled={(expandHeader || scrollTop > 0) === false}
                        onClick={() => {setExpandLang(!expandLang)}}
                        >
                        <svg className="header__svg" width="22" height="20" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.164 6.42091C10.2208 6.2 10.2557 6.03364 10.2878 5.87091L9.27942 5.67636L9.1795
                            6.13091C8.83942 6.08091 8.47642 6.07545 8.11067 6.11182C8.11892 5.86818 8.13358 5.62909 8.15558
                            5.39909H9.28217V4.45182H8.29033C8.33983 4.21091 8.38108 4.06636 8.42233 3.92909L7.43783 3.63636C7.36542
                            3.87545 7.30583 4.11 7.24442 4.45182H6.1215V5.39909H7.1225C7.09592 5.70455 7.08033 6.02182 7.07575
                            6.34273C5.96933 6.74545 5.5 7.51364 5.5 8.20909C5.5 9.03091 6.1545 9.75455 7.1885 9.66182C8.47275
                            9.54545 9.33075 8.58364 9.83308 7.40091C10.3528 7.69818 10.571 8.19727 10.3748 8.66C10.1942 9.08818
                            9.65983 9.49545 8.6405 9.47455V10.4936C9.77167 10.5109 10.8845 10.0845 11.3217 9.05455C11.7471 8.04818
                            11.2603 6.94818 10.164 6.42091ZM8.8385 7.11727C8.67808 7.46909 8.46725 7.81909 8.19867 8.09455C8.15742
                            7.80091 8.129 7.48 8.11433 7.13636C8.35908 7.10455 8.60658 7.09909 8.8385 7.11727ZM7.10233 7.44636C7.12983
                            7.87636 7.17933 8.27273 7.24717 8.62636C6.33233 8.79273 6.29567 7.89818 7.10233 7.44636ZM1.83333
                            7.59273C1.83333 9.29545 2.61158 10.2682 3.37608 11.1773C3.4045 12.0864 3.454 12.6936 3.07083
                            14.0709C4.67317 13.5636 4.939 13.3636 5.82817 12.8218C6.74483 13.0436 7.17933 13.1682 8.22158
                            13.2682C8.13542 13.9118 8.14733 14.4273 8.272 15.1073C7.58267 15.0527 6.87133 14.9455 6.13617
                            14.7673C4.85558 15.5464 2.02858 16.3355 0.04125 16.69C0.784667 15.24 1.60692 13.2491 1.56383
                            11.8609C0.56375 10.6745 0 9.14727 0 7.59273C0 3.20545 4.32575 0 9.16667 0C13.9673 0 18.3122 3.16727
                            18.3315 7.56182C17.7412 7.40273 17.1197 7.31 16.4789 7.27636C16.269 4.24 13.0753 1.81818 9.16667
                            1.81818C5.12325 1.81818 1.83333 4.40909 1.83333 7.59273ZM16.1856 12.5282L16.8502 14.4136H15.5256L16.1856
                            12.5282ZM22 14.0427C22 11.1718 19.1684 9.07273 15.9995 9.07273C12.8498 9.07273 9.999 11.1573 9.999
                            14.0427C9.999 16.5882 12.4126 18.99 15.9555 18.99C16.5963 18.99 17.2755 18.9109 17.9841 18.7409C18.8219
                            19.2509 20.6727 19.7655 21.9734 20C21.4876 19.05 20.9495 17.7464 20.9761 16.8373C21.6306 16.0618 22
                            15.0609 22 14.0427ZM17.5533 16.3636L17.1353 15.2091H15.2451L14.8317 16.3636H13.75L15.6741
                            11.3636H16.6833L18.6001 16.3636H17.5533Z" />
                        </svg>
                        <p className="header__buttonText">Language</p>
                        <svg className="header__drop" width="14" height="9" viewBox="0 0 14 9" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 9L0.0717972 -1.30507e-06L13.9282 -9.36995e-08L7 9Z"/>
                        </svg>
                        <div className={'header__langFlex' + (expandLang ? ' header__langFlex_open' : '')}>
                            <button
                                className="header__lang"
                                onClick={() => {console.log('yo')}}
                                disabled={!expandLang}
                                tabIndex={expandLang ? 0 : -1}
                                >
                                Português
                            </button>
                            <button
                                className="header__lang"
                                disabled={!expandLang}
                                tabIndex={expandLang ? 0 : -1}
                                >
                                English
                            </button>
                        </div>
                    </button>
                    <button
                        className="header__button"
                        tabIndex={(expandHeader || scrollTop > 0) ? 0 : -1}
                        disabled={(expandHeader || scrollTop > 0) === false}
                        >
                        <svg className="header__svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 10.8333V19.1666H12.5V14.1666H7.5V19.1666H2.5V10.8333H0L10 0.833313L20
                            10.8333H17.5ZM16.6667 5.91081V1.66665H14.1667V3.41081L16.6667 5.91081Z" />
                        </svg>
                        <p className="header__buttonText">Back to Home</p>
                    </button>
                    <button
                        className="header__button"
                        tabIndex={(expandHeader || scrollTop > 0) ? 0 : -1}
                        disabled={(expandHeader || scrollTop > 0) === false}
                        >
                        <svg className="header__svg" width="16" height="18" viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.318191 7.04843L7.23182 0.31012C7.65607
                            -0.103376 8.34393 -0.103376 8.76818 0.31012L15.6818 7.04843C16.1061 7.46193 16.1061 8.13234
                            15.6818 8.54584C15.2576 8.95933 14.5697 8.95933 14.1454 8.54584L9.08637
                            3.61505V18H6.91363V3.61505L1.85455 8.54584C1.4303 8.95933 0.742446 8.95933 0.318191
                            8.54584C-0.106064 8.13234 -0.106064 7.46193 0.318191 7.04843Z" />
                        </svg>
                        <p className="header__buttonText">Back to Top</p>
                    </button>
                </div>
                {/* Menu button - toggles header expansion */}
                <button
                    className={'header__menu' + (scrollTop > 0 ? ' header__menu_hidden' : '')}
                    onClick={() => {toggleHeader()}}
                    >
                    <svg className="header__svg" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                        aria-labelledby="menuLabel">
                        <title id="menuLabel">Menu</title>
                        <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
                    </svg>
                </button>
            </div>
        </header>
        {/* INTRO Block */}
        <section className="intro">
            <div className="intro__fade">
                <img
                    className="intro__image"
                    src={props.cat.profileImg1}
                    alt={props.cat.profileAlt1}
                />
            </div>
            <main className="intro__main">
                <h1 className="intro__name">
                    {props.cat.name.substr(0, 1)}
                    <span className="intro__highlight">
                        {props.cat.name.substr(1, 1)}
                    </span>
                    {props.cat.name.substr(2)}
                </h1>
                <div className="intro__text">
                    {props.cat.introduction['pt'].map((paragraph: string) => {
                        return <p className="intro__paragraph" key={paragraph}>{paragraph}</p>;
                    })}
                </div>
                <button className="intro__button">
                    View Gallery
                </button>
            </main>
        </section>
        </>
    );
}
// Export
export default Profile;