import { HomeText, ProfileText } from './';

const HOME_PT: HomeText = {
    prompt: {
        first: "Qual",
        second: "gato",
        third: "você vai",
        fourth: "olhar?"
    }
};

const PROFILE_PT: ProfileText = {

    backTop: "Topo",
    backHome: "Página Inicial",
    language: "Idioma",

    menu: "Menu",

    jumpGallery: "Ver Galeria",
    jumpStats: "Ver Estatísticas",

    statHint: "Toque um atributo para mais informações",
    stats: {
        ['agility']: "Agilidade",
        ['intelligence']: "Inteligência",
        ['charisma']: "Carisma"
    },

    alignment: {
        title: "Alinhamento",
        x: {
            [0]: {
                ['him']: "Ordeiro",
                ['her']: "Ordeira",
                ['them']: "Ordeire"
            },
            [1]: {
                ['him']: "Neutro",
                ['her']: "Neutra",
                ['them']: "Neutre"
            },
            [2]: {
                ['him']: "Caótico",
                ['her']: "Caótica",
                ['them']: "Caótique"
            }
        },
        y: {
            [0]: {
                ['him']: "e Bom",
                ['her']: "e Boa",
                ['them']: "e Boe"
            },
            [1]: {
                ['him']: "e Neutro",
                ['her']: "e Neutra",
                ['them']: "e Neutre"
            },
            [2]: {
                ['him']: "e Mau",
                ['her']: "e Má",
                ['them']: "e Mae"
            }
        },
        neutral: {
            ['him']: "Neutro Absoluto",
            ['her']: "Neutra Absoluta",
            ['them']: "Neutre Absolute"
        }
    },

    ability: "Habilidade",

    gallery: "Galeria",
    galleryHint: "Arraste ou use os botões para navegar",
    buttonBack: "Anterior",
    buttonNext: "Próxima",
    
    by: "por",
    check: "Veja também o projeto no..."
};

export { HOME_PT, PROFILE_PT };