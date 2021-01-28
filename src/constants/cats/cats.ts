import KIWI from "./kiwi";
import MUFFIN from "./muffin";
import CHANTI from "./chanti";
import BONNIE from "./bonnie";

interface Cat {
    name: string,
    profileImg1: string,
    profileAlt1: string,
    profileImg2: string,
    profileAlt2: string
    introduction: {
        [lang: string]: string[]
    },
    stats: {
        agility: number,
        intelligence: number,
        charisma: number
    },
    alignment: {
        x: 0 | 1 | 2,
        y: 0 | 1 | 2
    },
    ability: {
        [lang: string]: {
            name: string,
            description: string
        }
    },
    gallery: {
        [index: number]: {
            image: string,
            alt: string
        }
    }
}

const CATS: Cat[] = [KIWI, MUFFIN, CHANTI, BONNIE];

export type { Cat };
export default CATS;