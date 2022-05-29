import ImageGameDesigner from "../../images/GameDesigner.jpg";
import ImageGreetGy from "../../images/ReverendInsanity.jpg";
import ImageLegendaryMechanic from "../../images/LegMex.jpg";
import ImageThreeDays from "../../images/ThreeDays.jpg";
import ImageWorldOnline from "../../images/WorldOnline.jpg";
import {IS_SEARCH_BOX_ACTIVE, MENU, RESET_SEARCH_BOX_VALUE, SEARCH_BOX_VALUE} from "../actions/actionTypes";

const initialState = {
    searchBoxValue: "", // search box value
    isSearchBox: false, // search box active or not
    menu: false, // for drawer
    novels: [
        {
            name: "Всемогущий Геймдизайнер",
            author: "Qing Shan Qu Zui",
            description: "Чэнь Мо нравилось называть себя геймдизайнером, несмотря на то, что он был простым продюссером видеоигр. Умерев от стресса, который был связанн с его работой, он переселился в параллельный мир в свое тело, которое недавно окончило универ. Теперь он был в теле своего молодого \"Я\", которое стремилось стать геймдизайнером. Сможет ли он осуществить свою мечту, переродившись в этом странно отличающемся новом мире, и стать лучшим геймдизайнером в этом мире? Следуйте за Чэнь Мо, наблюдайте за тем, как он переносит великие игры прошлого в совершенно новый мир в погоне за своей мечтой!",
            image: ImageGameDesigner,
            likes: 0,
            dislikes: 0,
            rating: 4.2,
            views: 31,
        },
        {
            name: "Преподобный Гу",
            author: "Gu Zhen Ren",
            description: "Люди искусны в десятках тысяч путей, Гу истинная усовершенствованная сущность неба и земли.\n" +
                "\n" +
                "Три храма нечестивы, демон возрождается. \n" +
                "\n" +
                "Прежние дни - это всего лишь старый сон, аналогичное имя рождается заново. \n" +
                "\n" +
                "История путешественника во времени, который продолжает возрождаться. \n" +
                "\n" +
                "Уникальный мир, который растет, развивается и использует Гу. \n" +
                "\n" +
                "Цикада Весны и Осени, Ядовитый Лунный Свет Гу, Виноград Чон, Всеохватывающий Золотой Свет Чон, Тонкие Черные Волосы Гу, Гу Надежды…\n" +
                "\n" +
                "И великий демон мира, который делает все, что душе угодно! ",
            image: ImageGreetGy,
            likes: 0,
            dislikes: 0,
            rating: 4.4,
            views: 201,
        },
        {
            name: "Легендарный механик",
            author: "Chocolion",
            description: "Однажды очнувшись, вы обнаружили, что находитесь внутри любимой игры. Но что вам делать, если вы не только стали NPC, но и оказались настолько в прошлом игрового мира, что игра к этому моменту даже не была запущена? Что произойдёт, когда ваш прошлый мир начнёт вытесняться нынешней реальностью?\n" +
                "\n" +
                "До того, как Хан Сяо вот так вот переродился, он зарабатывал тем, что профессионально занимался прокачкой аккаунтов. И вот, со всем багажом знаний из своей прошлой жизни, Хан Сяо начнёт своё восхождение в этом мире, готовясь к моменту прибытия игроков.\n" +
                "\n" +
                "Это определённо нетипичная новелла о перерождении, наполненная богатыми приключениями и юмором. Погрузитесь в мир Легендарного Механика вместе с нами!",
            image: ImageLegendaryMechanic,
            likes: 0,
            dislikes: 0,
            rating: 4.3,
            views: 73,
        },
        {
            name: "Три дня счастья",
            author: "Sugaru Miaki",
            description: "До того дня в его жизни не произошло ничего хорошего. Поэтому её оценили по десять тысяч иен за год. Пессимистично думая о будущем, он продал отведённое ему время, чтобы хоть немного почувствовать радость оставшейся жизни. В итоге, к нему была приставлена Мияги - \"Наблюдатель\", чтобы следить за ним, пока тот не умрёт...",
            image: ImageThreeDays,
            likes: 20,
            dislikes: 3,
            rating: 4.8,
            views: 121,
        },
        {
            name: "Мир Онлайн",
            author: "Sheng Xiao",
            description: "Преданный его названным братом, Оуян Шо чудесным образом перемещается на 5 лет в прошлое. Только на этот раз он решил избрать совершенно другой путь, используя свои знания за последующие пять лет, для того, чтобы построить империю. Роман содержит технические аспекты построения королевства, такие как создание различных ведомств и отделов, а также военные аспекты, которые все знают и любят. Читайте новеллу, чтобы узнать, как ГГ поднимется на вершину, преодолевая все препятствия!",
            image: ImageWorldOnline,
            likes: 0,
            dislikes: 0,
            rating: 3.9,
            views: 53,
        },
    ],
    news: [
        {
            text: "Обновление 2.14"
        },
        {
            text: "Новая новелла уже на сайте!"
        },
        {
            text: "Технические работы 28.05.22"
        },
        {
            text: "Блог 1.2 - уже вышел!"
        },
        {
            text: "Перевод новеллы - 3 дня счастья"
        }
    ]
}

export default function rootReducer(state= initialState, action) {
    switch (action.type) {
        case MENU:
            return {
                ...state,
                menu: !state.menu,
            }
        case IS_SEARCH_BOX_ACTIVE:
            return {
                ...state,
                isSearchBox: !state.isSearchBox,
            }
        case SEARCH_BOX_VALUE:
            return {
                ...state,
                searchBoxValue: action.payload
            }
        case RESET_SEARCH_BOX_VALUE:
            return {
                ...state,
                searchBoxValue: ""
            }
        default:
            return state
    }
}