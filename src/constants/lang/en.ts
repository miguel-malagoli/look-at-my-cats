import { HomeText, ProfileText } from './';

const HOME_EN: HomeText = {
    prompt: {
        first: "Which",
        second: "cat",
        third: "will you",
        fourth: "look at?"
    }
}

const PROFILE_EN: ProfileText = {

    backTop: "Back to Top",
    backHome: "Back to Home",
    language: "Language",

    menu: "Menu",

    jumpGallery: "View Gallery",
    jumpStats: "View Stats",

    statHint: "Touch or hover a stat for more info",
    stats: {
        ['agility']: "Agility",
        ['intelligence']: "Intelligence",
        ['charisma']: "Charisma"
    },

    alignment: {
        title: "Alignment",
        x: {
            [0]: {
                ['him']: "Lawful",
                ['her']: "Lawful",
                ['them']: "Lawful"
            },
            [1]: {
                ['him']: "Neutral",
                ['her']: "Neutral",
                ['them']: "Neutral"
            },
            [2]: {
                ['him']: "Chaotic",
                ['her']: "Chaotic",
                ['them']: "Chaotic"
            }
        },
        y: {
            [0]: {
                ['him']: "Good",
                ['her']: "Good",
                ['them']: "Good"
            },
            [1]: {
                ['him']: "Neutral",
                ['her']: "Neutral",
                ['them']: "Neutral"
            },
            [2]: {
                ['him']: "Evil",
                ['her']: "Evil",
                ['them']: "Evil"
            }
        },
        neutral: {
            ['him']: "True Neutral",
            ['her']: "True Neutral",
            ['them']: "True Neutral"
        }
    },

    ability: "Ability",

    gallery: "Gallery",
    galleryHint: "Swipe or use the buttons to cycle images",
    buttonBack: "Back",
    buttonNext: "Next",

    by: "by",
    check: "Check out the project on..."
};

export { HOME_EN, PROFILE_EN };