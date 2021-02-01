import KIWI from "./cats/kiwi";
import MUFFIN from "./cats/muffin";
import CHANTI from "./cats/chanti";
import BONNIE from "./cats/bonnie";
import { LangOptions } from "./lang";

interface Cat {
    name: string,
    profileImg1: string,
    profileAlt1: {
        [key in LangOptions]: string
    },
    profileImg2: string,
    profileAlt2: {
        [key in LangOptions]: string
    },
    introduction: {
        [key in LangOptions]: string[]
    },
    stats: {
        [key in StatName]: {
            score: StatRange,
            description: {
                [key in LangOptions]: string
            },
        }
    },
    alignment: {
        x: AlignRange,
        y: AlignRange,
        description: {
            [key in LangOptions]: string
        },
    },
    ability: {
        [key in LangOptions]: {
            name: string,
            description: string
        }
    },
    gallery: {
        [index: number]: {
            image: string,
            alt: {
                [key in LangOptions]: string
            },
        }
    }
}

const CATS: Cat[] = [KIWI, MUFFIN, CHANTI, BONNIE];
const STAT_RANGE = [1, 2, 3, 4, 5] as const;
const STAT_NAMES = ['agility', 'intelligence', 'charisma'] as const;
const ALIGN_RANGE = [0, 1, 2] as const;

type StatRange = typeof STAT_RANGE[number];
type StatName = typeof STAT_NAMES[number];
type AlignRange = typeof ALIGN_RANGE[number];

export type { Cat, StatRange, StatName, AlignRange };
export default CATS;
export { STAT_RANGE, STAT_NAMES, ALIGN_RANGE };