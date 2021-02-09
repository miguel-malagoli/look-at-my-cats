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
        ['pt']: "Bonnie, de pêlo branco, marrom e preto e olhos verdes",
        ['en']: "Bonnie, of white, brown and black fur and green eyes"
    },
    profileImg2: profileImg2,
    profileAlt2: {
        ['pt']: "Bonnie sentada em baixo de um guarda-chuva olhando para a chuva",
        ['en']: "Bonnie sitting under an umbrella and looking at the rain"
    },
    introduction: {
        ['pt']: [
            "Numa casa onde todos os gatos são calmos e dorminhocos, Bonnie é tão energética e sociável que seu comportamento lembra muito mais o de uma cachorrinha. Corajosa até demais, não há nenhum canto da casa pelo qual ela já não tenha corrido ou pulado - tanto que ela chegou em casa da rua, escalando o muro, e ficou.",
            "Ela não tem problema com outros gatos (exceto a Chanti) mas ela realmente adora pessoas, e sempre interage com visitas e observa estranhos passando pelas janelas."
        ],
        ['en']: [
            "In a house where all the cats are chill and sleepy, Bonnie is so energetic and social that her behavior is much more like that of a little dog. Courageous to a fault, there is no corner of the house she hasn't climbed or sprinted across - in fact, she first came into the house by climbing in from the street.",
            "She has no problem with the other cats (except Chanti) but she really loves people, and always interacts with guests and watches strangers passing through the windows."
        ]
    },
    stats: {
        ["agility"]: {
            score: 4,
            description: {
                ['pt']: "Ágil o suficiente para entrar em qualquer lugar, só não para sair de todos eles",
                ['en']: "Agile enough to get into any spot, just not enough to get out of all of them"
            }
        },
        ["intelligence"]: {
            score: 1,
            description: {
                ['pt']: "A Bonnie não perde tempo pensando quando ela podia estar correndo como louca por aí",
                ['en']: "Bonnie doesn't waste time thinking when she could be running all over the place"
            }
        },
        ["charisma"]: {
            score: 5,
            description: {
                ['pt']: "Ela ama tudo que olha para ela, e todo mundo que olha para ela, ama",
                ['en']: "She loves anything that looks at her, and everyone who looks loves her"
            }
        },
    },
    alignment: {
        x: 2,
        y: 1,
        description: {
            ['pt']: "A Bonnie pode não ter certeza do que ela está fazendo, mas ela vai fazer do jeito dela",
            ['en']: "Bonnie may not be sure of what she's doing, but she is going to do it her own way"
        }
    },
    ability: {
        ["pt"]: {
            name: "Amizade",
            description: "Uma vez por dia, Bonnie pode fazer com que uma criatura que consegue vê-la fique encantada com ela e a trate como uma amiga e aliada. Essa habilidade afeta até mesmo criaturas que normalmente não gostam de gatos."
        },
        ["en"]: {
            name: "Friend",
            description: "Once per day, Bonnie can cause a creature that can see her to be charmed and treat her as a friend and ally. This ability cannot be resisted, even by creatures that wouldn't normally like cats."
        }
    },
    gallery: {
        ['one']: {
            image: gallery1,
            alt: {
                ["pt"]: "Bonnie espremida no canto de uma cadeira, pronta pra brincar",
                ["en"]: "Bonnie squeezed into the corner of a chair, looking playful"
            }
        },
        ['two']: {
            image: gallery2,
            alt: {
                ["pt"]: "Bonnie se escondendo dentro de uma sacola",
                ["en"]: "Bonnie hiding inside a shopping bag"
            }
        },
        ['three']: {
            image: gallery3,
            alt: {
                ["pt"]: "Bonnie segurando uma bolinha na boca",
                ["en"]: "Bonnie holding a ball toy in her mouth"
            }
        },
        ['four']: {
            image: gallery4,
            alt: {
                ["pt"]: "Bonnie dormindo com uma pata cobrindo os olhos",
                ["en"]: "Bonnie sleeping with one paw covering her eyes"
            }
        },
        ['five']: {
            image: gallery5,
            alt: {
                ["pt"]: "Bonnie espiando para fora de uma caixa de leite vazia",
                ["en"]: "Bonnie peeking out of a large milk box"
            }
        },
        ['six']: {
            image: gallery6,
            alt: {
                ["pt"]: "Bonnie deitada dentro de um guarda-roupa",
                ["en"]: "Bonnie lying down inside of a wardorbe"
            }
        }
    }
}

export default BONNIE;