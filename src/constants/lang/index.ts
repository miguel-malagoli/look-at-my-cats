import React from 'react';
import { StatName, AlignRange } from '../cats';
import { HOME_EN, PROFILE_EN } from "./en";
import { HOME_PT, PROFILE_PT } from "./pt";

type PageText<T> = {
    [key in LangOptions]: T
}

interface HomeText {
    prompt: {
        first: string,
        second: string,
        third: string,
        fourth: string
    }
}
interface ProfileText {
    backTop: string,
    backHome: string,
    language: string,
    menu: string,
    jumpGallery: string,
    jumpStats: string,
    statHint: string,
    stats: {
        [key in StatName]: string
    },
    alignment: {
        title: string,
        x: {
            [key in AlignRange]: {
                [key in Pronouns]: string
            }
        },
        y: {
            [key in AlignRange]: {
                [key in Pronouns]: string
            }
        },
        neutral: {
            [key in Pronouns]: string
        }
    },
    ability: string,
    gallery: string,
    galleryHint: string,
    buttonBack: string,
    buttonNext: string,
    by: string,
    check: string
}

const LANG_OPTIONS = ['pt', 'en'] as const;
type LangOptions = typeof LANG_OPTIONS[number];
const PRONOUNS = ['him', 'her', 'them'] as const;
type Pronouns = typeof PRONOUNS[number];

const HOME_TEXT: PageText<HomeText> = {
    ['pt']: HOME_PT,
    ['en']: HOME_EN
}
const PROFILE_TEXT: PageText<ProfileText> = {
    ['pt']: PROFILE_PT,
    ['en']: PROFILE_EN
}

const LangContext = React.createContext<LangOptions>('en');

export type { LangOptions, Pronouns, HomeText, ProfileText };
export { HOME_TEXT, PROFILE_TEXT }
export default LangContext;