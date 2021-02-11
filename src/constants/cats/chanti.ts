import { Cat } from "../cats";
import profileImg1 from '../../images/chanti/chantiProfile.png';
import profileImg2 from '../../images/chanti/chanti4-01.jpg';
import gallery1 from '../../images/chanti/chanti1-01.jpg';
import gallery2 from '../../images/chanti/chanti2-01.jpg';
import gallery3 from '../../images/chanti/chanti3-01.jpg';
import gallery4 from '../../images/chanti/chanti8-01.jpg';
import gallery5 from '../../images/chanti/chanti9-01.jpg';
import gallery6 from '../../images/chanti/chanti10-01.jpg';

const CHANTI: Cat = {
    name: "Chanti",
    pronoun: "her",
    profileImg1: profileImg1,
    profileAlt1: {
        ['pt']: "Chanti, branca, redonda, macia e de olhinhos azuis",
        ['en']: "Chanti, white, round, fluffy and with little blue eyes"
    },
    profileImg2: profileImg2,
    profileAlt2: {
        ['pt']: "Chanti enrolada em uma bolinha, encaixando perfeitamente numa cesta",
        ['en']: "Chanti rolled up into a ball, fitting perfectly into a basket"
    },
    introduction: {
        ['pt']: [
            "A Chanti foi a única a entrar para a família ainda bebê - logo após nascer no telhado da casa! Ela é tímida e se assusta fácil com gatos e humanos, mas sempre teve uma conexão muito forte com o Muffin, com quem passa a maior parte do tempo. Ela não gosta muito da Bonnie, e as duas mantém uma distância respeitável.",
            "Ela é a quem mais aproveita o luxo da vida de gata, comendo e dormindo o dia inteiro. Mas ela gosta muito de ser vista fazendo essas coisas, e a casa inteira pode ouvir ela chamando alguém para olhá-la comendo orgulhosa."
        ],
        ['en']: [
            "Chanti was the only one to join the family still a kitten - right after she was born on the roof! She is shy and get scared easily by cats and humans both, but has always had a strong bond with Muffin, with whom she spends most of her time. She doesn't really like Bonnie, though, so the two keep their distance",
            "She is the one who gets the most out the luxurious cat life, eating and sleeping all day. But she really likes to be seen doing those things, and the whole house can hear her calling for someone to watch her eat, all proud of herself."
        ]
    },
    stats: {
        ["agility"]: {
            score: 3,
            description: {
                ['pt']: "Ela realmente não gosta de se mexer muito, mas quando precisa não tem dificuldade",
                ['en']: "She really doesn't like to move around, but when she has to it's not a problem"
            }
        },
        ["intelligence"]: {
            score: 4,
            description: {
                ['pt']: "A Chanti é cuidadosa e atenta a tudo - bom, pelo menos quando ela está acordada",
                ['en']: "Chanti is careful and aware of her surroundings - well, when she's awake anyway"
            }
        },
        ["charisma"]: {
            score: 2,
            description: {
                ['pt']: "Ela tem muito medo da maoria das coisas que se mexem para fazer amizade com elas",
                ['en']: "Unfortunately, she's too afraid of most things that move to make friends with them"
            }
        },
    },
    alignment: {
        x: 1,
        y: 1,
        description: {
            ['pt']: "A Chanti não demonstra muito interesse nas preocupações e na lógica do mundo ao seu redor",
            ['en']: "Chanti doesn't show much interest in the concerns and the logic of the world around her"
        }
    },
    ability: {
        ["pt"]: {
            name: "Detectar Fantasmas",
            description: "Embora ela pareça às vezes estar olhando fixamente para o nada ou miando consigo mesma, Chanti é capaz de detectar a presença de espíritos e de se comunicar com eles de forma limitada caso eles sejam amigáveis e compreendam sua língua."
        },
        ["en"]: {
            name: "Detect Ghosts",
            description: "Though she sometimes appears to be looking directly at nothing or meowing to herself, Chanti is able to detect the presence of nearby spirits and to communicate with them, to an extent, if they are friendly and understand her language."
        }
    },
    gallery: {
        ['one']: {
            image: gallery1,
            alt: {
                ["pt"]: "Chanti deitada, descansando a cabeça no chão na frente do corpo",
                ["en"]: "Chanti loafing, but resting her head on the floor in front of her"
            }
        },
        ['two']: {
            image: gallery2,
            alt: {
                ["pt"]: "Chanti dormindo dentro de um vaso em meio às folhas de planta",
                ["en"]: "Chanti asleep in a vase, in the middle of the plant leaves"
            }
        },
        ['three']: {
            image: gallery3,
            alt: {
                ["pt"]: "Chanti dormindo sobre uma pilha de livros e encostada em outra",
                ["en"]: "Chanti lying on top of a pile of books, resting against a second pile"
            }
        },
        ['four']: {
            image: gallery4,
            alt: {
                ["pt"]: "Chanti sentada ao lado de um relógio, olhando interessada para cima",
                ["en"]: "Chanti sitting next to a clock, looking playfully towards something above"
            }
        },
        ['five']: {
            image: gallery5,
            alt: {
                ["pt"]: "Chanti bebê, espiando a câmera por trás de um sofá",
                ["en"]: "Baby Chanti, peeking at the camera from behind a sofa"
            }
        },
        ['six']: {
            image: gallery6,
            alt: {
                ["pt"]: "Chanti dormindo em uma janela, entre dois vasinhos",
                ["en"]: "Chanti asleep on a window, between two tiny vases"
            }
        }
    }
}

export default CHANTI;