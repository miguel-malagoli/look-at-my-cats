import { Cat } from "../cats";
import profileImg1 from '../../images/kiwi/kiwiProfile.png';
import profileImg2 from '../../images/kiwi/kiwi7-01.jpg';
import gallery1 from '../../images/kiwi/kiwi1-01.jpg';
import gallery2 from '../../images/kiwi/kiwi3-01.jpg';
import gallery3 from '../../images/kiwi/kiwi5-01.jpg';
import gallery4 from '../../images/kiwi/kiwi8-01.jpg';
import gallery5 from '../../images/kiwi/kiwi10-01.jpg';
import gallery6 from '../../images/kiwi/kiwi11-01.jpg';

const KIWI: Cat = {
    name: "Kiwi",
    profileImg1: profileImg1,
    profileAlt1: {
        ['pt']: "Kiwi, de olhos verdes, pêlo marrom e olhar distraído",
        ['en']: "Kiwi, the tabby cat with green eyes and distracted expression"
    },
    profileImg2: profileImg2,
    profileAlt2: {
        ['pt']: "Kiwi, toda caçadora, olhando intensamente para a câmera",
        ['en']: "Kiwi, with big huntress energy, staring intensely at the camera"
    },
    introduction: {
        ['pt']: [
            "A primeira a chegar em casa, Kiwi ganhou seu nome por causa de seus pelinhos marrons e seus olhos verdes. Ela é super tranquila e independente, mas também pode ser muito carinhosa com as pessoas depois de se acostumar com elas. Se ela gosta de você, ela começa a ronronar assim que você olha para ela.",
            "Hoje em dia, com a casa cheia de outros gatos, a Kiwi tomou a posição de irmã mais velha séria, passando a maior parte do tempo deitada em lugares altos enquanto observa sua família."
        ],
        ['en']: [
            "The first to arrive at the house, Kiwi got her name because of her brown fur and green eyes. She's really chill and independent, but can also grow very affectionate towards the people she comes to trust. You can tell when she likes you, because she'll immediately start purring when you make eye contact.",
            "These days, with the house full of other cats, Kiwi has shifted into a serious older sister role, spending most of the time lying down in high places and watching her family."
        ]
    },
    stats: {
        ["agility"]: {
            score: 4,
            description: {
                ['pt']: "A Kiwi consegue escalar quase qualquer superfície de casa, rápida e silenciosamente",
                ['en']: "Kiwi can climb onto any surface she wants in the house, quickly and quietly"
            }
        },
        ["intelligence"]: {
            score: 3,
            description: {
                ['pt']: "O que se passa na cabeça da Kiwi enquanto ela observa em silêncio é um mistério",
                ['en']: "What goes on in Kiwi's mind as she silently stands in watch is a mystery"
            }
        },
        ["charisma"]: {
            score: 2,
            description: {
                ['pt']: "Um pouco tímida, e às vezes pode deixar os outros gatos com medo dela sem querer",
                ['en']: "A bit on the shy side, and she can sometimes make other cats afraid of her unintentionally"
            }
        },
    },
    alignment: {
        x: 0,
        y: 1,
        description: {
            ['pt']: "Kiwi gosta de ordem e rotina, mas observa apenas as suas próprias leis",
            ['en']: "Kiwi likes order and consistency, but the laws she observes are her own"
        }
    },
    ability: {
        ["pt"]: {
            name: "Caminho das Sombras",
            description: "Usando seu equilíbrio, calma e delicadeza, Kiwi pode se mover em absoluto silêncio e não pode ser detectada por nenhuma criatura através da audição. Essa habilidade também inclui pulos e escaladas."
        },
        ["en"]: {
            name: "Shadowstep",
            description: "By using her balance, tranquility and finesse, Kiwi can move in absolute silence and cannot be detected by any creature by means of hearing. This ability also includes jumping and climbing."
        }
    },
    gallery: {
        ['one']: {
            image: gallery1,
            alt: {
                ["pt"]: "Kiwi deitada no sol, ao lado de seu arranhador",
                ["en"]: "Kiwi lying in the sun, next to her scratching toy"
            }
        },
        ['two']: {
            image: gallery2,
            alt: {
                ["pt"]: "Kiwi em momento raro, expondo sua barriguinha macia para carinhos",
                ["en"]: "Kiwi in a rare moment, exposing her fluffy tummy for scratches"
            }
        },
        ['three']: {
            image: gallery3,
            alt: {
                ["pt"]: "Kiwi em pose estranha, deitada porém esticada olhando para cima",
                ["en"]: "Kiwi doing a weird pose, lying down but stretched and looking up"
            }
        },
        ['four']: {
            image: gallery4,
            alt: {
                ["pt"]: "Kiwi se escondendo atrás de um banco com as pupilas dilatadas",
                ["en"]: "Kiwi hiding behind a seat, with huge dilated pupils"
            }
        },
        ['five']: {
            image: gallery5,
            alt: {
                ["pt"]: "Kiwi prestes a iniciar uma escalada pelo muro",
                ["en"]: "Kiwi about to start climbing a wall"
            }
        },
        ['six']: {
            image: gallery6,
            alt: {
                ["pt"]: "Kiwi dormindo abraçada com um cachorrinho de pelúcia",
                ["en"]: "Kiwi, asleep and hugging a plush dog"
            }
        }
    }
}

export default KIWI;