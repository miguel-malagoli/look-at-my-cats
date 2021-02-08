import { Cat } from "../cats";
import profileImg1 from '../../images/bonnie/bonnieProfile.png';
import profileImg2 from '../../images/bonnie/bonnie8-01.jpg';
import gallery1 from '../../images/bonnie/bonnie10-01.jpg';
import gallery2 from '../../images/bonnie/bonnie2-01.jpg';
import gallery3 from '../../images/bonnie/bonnie3-01.jpg';
import gallery4 from '../../images/bonnie/bonnie4-01.jpg';
import gallery5 from '../../images/bonnie/bonnie5-01.jpg';
import gallery6 from '../../images/bonnie/bonnie7-01.jpg';

const BONNIE: Cat = {
    name: "Bonnie",
    profileImg1: profileImg1,
    profileAlt1: {
        ['pt']: "",
        ['en']: ""
    },
    profileImg2: profileImg2,
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
    gallery: {
        ['one']: {
            image: gallery1,
            alt: {
                ["pt"]: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                ["en"]: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            }
        },
        ['two']: {
            image: gallery2,
            alt: {
                ["pt"]: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                ["en"]: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            }
        },
        ['three']: {
            image: gallery3,
            alt: {
                ["pt"]: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                ["en"]: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            }
        },
        ['four']: {
            image: gallery4,
            alt: {
                ["pt"]: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                ["en"]: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            }
        },
        ['five']: {
            image: gallery5,
            alt: {
                ["pt"]: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                ["en"]: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            }
        },
        ['six']: {
            image: gallery6,
            alt: {
                ["pt"]: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                ["en"]: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            }
        }
    }
}

export default BONNIE;