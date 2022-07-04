//Название файла обусловлено наличием динамической навигации
//Страница используется при открытии отдельных пользователей
import {useRouter} from "next/router";//Модуль для выцепления query из строки запроса
import styles from '../../styles/User.module.scss';//Подключение препроцессора
import MainContainer from '../../components/MainContainer';//Главный контейнер с meta-тегами и navbar
import Users from "../users";

export default function User ({user}) {//user мы берём из функции внизу
    const {query} = useRouter()//Получение числа из строки запроса

    //console.log(router)

    return (
        //Как keyword передаётся имя пользователя
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1>Пользователь с id {query.id}</h1>
                <div>Имя пользователя - {user.name}</div>
            </div>
        </MainContainer>
    )
}

//Функции для получения информаиции о конретном пользователе с сервера. Выполняется на сервере.
export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: {user}, 
    }
}