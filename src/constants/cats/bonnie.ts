import { Cat } from "../cats";
import profileImg1 from '../../images/bonnie/bonnieProfile.png';

const BONNIE: Cat = {
    name: "Bonnie",
    profileImg1: profileImg1,
    profileAlt1: {
        ['pt']: "",
        ['en']: ""
    },
    profileImg2: "",
    profileAlt2: {
        ['pt']: "",
        ['en']: ""
    },
    introduction: {
        ['pt']: [
            "Hac habitasse platea dictumst vestibulum rhoncus. Facilisis sed odio morbi quis commodo odio. Senectus et netus et malesuada fames. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Ullamcorper morbi tincidunt ornare massa eget.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum lectus mauris ultrices eros. Eget lorem dolor sed viverra ipsum nunc aliquet."
        ],
        ['en']: [
            "Hac habitasse platea dictumst vestibulum rhoncus. Facilisis sed odio morbi quis commodo odio. Senectus et netus et malesuada fames. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Ullamcorper morbi tincidunt ornare massa eget.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum lectus mauris ultrices eros. Eget lorem dolor sed viverra ipsum nunc aliquet."
        ]
    },
    stats: {
        ["agility"]: {
            score: 4,
            description: {
                ['pt']: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                ['en']: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            }
        },
        ["intelligence"]: {
            score: 1,
            description: {
                ['pt']: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                ['en']: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            }
        },
        ["charisma"]: {
            score: 5,
            description: {
                ['pt']: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                ['en']: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            }
        },
    },
    alignment: {
        x: 0,
        y: 0,
        description: {
            ['pt']: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            ['en']: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        }
    },
    ability: {
        ["pt"]: {
            name: "",
            description: ""
        },
        ["en"]: {
            name: "",
            description: ""
        }
    },
    gallery: []
}

export default BONNIE;