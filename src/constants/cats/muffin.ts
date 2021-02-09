import { Cat } from "../cats";
import profileImg1 from '../../images/muffin/muffinProfile.png';
import profileImg2 from '../../images/muffin/muffin11-01.jpg';
import gallery1 from '../../images/muffin/muffin8-01.jpg';
import gallery2 from '../../images/muffin/muffin1-01.jpg';
import gallery3 from '../../images/muffin/muffin3-01.jpg';
import gallery4 from '../../images/muffin/muffin5-01.jpg';
import gallery5 from '../../images/muffin/muffin6-01.jpg';
import gallery6 from '../../images/muffin/muffin10-01.jpg';

const MUFFIN: Cat = {
    name: "Muffin",
    profileImg1: profileImg1,
    profileAlt1: {
        ['pt']: "Muffin, o pequeno gato branco e amarelo de olhos verdes",
        ['en']: "Muffin, the tiny white and yellow cat with green eyes"
    },
    profileImg2: profileImg2,
    profileAlt2: {
        ['pt']: "Muffin olhando para a câmera, com vista de uma sacada por trás",
        ['en']: "Muffin looking at the camera with the view from a balcony behind him"
    },
    introduction: {
        ['pt']: [
            "O Muffin chegou em casa da rua, com fome e o rabinho quebrado, e entrou para a família. Ele é um eterno bebê, e sempre quer carinho e atenção, mas quando conheceu a Chanti filhote ele mostrou que também pode dar esse mesmo cuidado. Ele praticamente a adotou e os dois são inseparáveis até hoje.",
            "Apesar de ser o menor gato da família e bem simpático a maior parte do tempo, o Muffin gosta de tentar ser o protetor de casa. Qualquer animal ou inseto que se aproxima encontra o gatinho amarelo se fazendo de mau."
        ],
        ['en']: [
            "Muffin came into the house from the street, hungry and with a broken tail, and became part of the family. He is forever a baby, always begging for attention, but when he met kitten Chanti, he proved he can also give that same love. He practically adopted her and the two have been inseparable ever since.",
            "Despite being the smallest, and also very nice most of the time, Muffin likes to play being the protector of the house. Any animal or bug that comes near will find the tiny yellow cat acting all tough."
        ]
    },
    stats: {
        ["agility"]: {
            score: 3,
            description: {
                ['pt']: "O Muffin consegue pular e correr sem problema, mas prefere sentar perto de todo mundo",
                ['en']: "Muffin can run and climb just fine, but he'd rather be sitting next to everyone"
            }
        },
        ["intelligence"]: {
            score: 2,
            description: {
                ['pt']: "Sempre meio perdido, ele prefere depender das orientações de quem ele confia",
                ['en']: "Always a bit lost, he prefers to have guidance from someone he trusts"
            }
        },
        ["charisma"]: {
            score: 4,
            description: {
                ['pt']: "Muito fofo e simpático, sempre gosta de ter alguém por perto",
                ['en']: "Very sweet and kind, always happy to have some company"
            }
        },
    },
    alignment: {
        x: 2,
        y: 0,
        description: {
            ['pt']: "O Muffin sempre tenta proteger e ajudar seus amigos, do seu jeitinho desastrado",
            ['en']: "Muffin always tries to protect and help his friends, in his own clumsy way."
        }
    },
    ability: {
        ["pt"]: {
            name: "Toque Curativo",
            description: "Durante um descanso curto ou longo, Muffin pode lamber e dormir abraçado com uma outra criatura aliada, removendo uma condição negativa mental ou espiritual de sua escolha do alvo."
        },
        ["en"]: {
            name: "Healing Touch",
            description: "During a short or long rest, Muffin can groom and cuddle with one other allied creature, choosing to remove from that target any one mental or spiritual ailment."
        }
    },
    gallery: {
        ['one']: {
            image: gallery1,
            alt: {
                ["pt"]: "Muffin no colo de uma pessoa lendo um livro, acompanhando o dedo dela pela página",
                ["en"]: "Muffin on the lap of a person reading a book, tracking their finger going across the page"
            }
        },
        ['two']: {
            image: gallery2,
            alt: {
                ["pt"]: "Muffin e Chanti dormindo abraçados na forma de uma bolinha macia e peluda",
                ["en"]: "Muffin and Chanti cuddling together into a soft, furry ball"
            }
        },
        ['three']: {
            image: gallery3,
            alt: {
                ["pt"]: "Muffin deitado dentro de um cesto, olhando intensamente para algo fora de vista",
                ["en"]: "Muffin lying down inside a basket, looking intensely at something off-camera"
            }
        },
        ['four']: {
            image: gallery4,
            alt: {
                ["pt"]: "Muffin andando sobre o corrimão de uma sacada, olhando para as árvores além do muro",
                ["en"]: "Muffin walking on top of a balcony fence, looking at the trees beyond the wall"
            }
        },
        ['five']: {
            image: gallery5,
            alt: {
                ["pt"]: "Muffin deitado no sol, olhando para a câmera",
                ["en"]: "Muffin lying down in the sun, looking at the camera"
            }
        },
        ['six']: {
            image: gallery6,
            alt: {
                ["pt"]: "Muffin ao lado da Chanti ainda bebê, olhando pela janela",
                ["en"]: "Muffin next to Chanti as a kitten, looking out the window"
            }
        }
    }
}

export default MUFFIN;