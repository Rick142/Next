//Данная страница доступна по адресу /users. Наименование файла - часть маршрута.
import Link from "next/link";
import { useState } from "react";
import MainContainer from "../components/MainContainer";//Главный контейнер с meta-тегами и navbar

const Users = ({users}) => {//users мы берём из функции внизу

    return (
        <MainContainer keywords={'users'}>
            <h1>Список пользователей</h1>
            <ul>
                {users.map(user => 
                //На каждый элемент списка повешена динамическая ссылка  (Подробнее в README.md)
                    <li>
                        <Link href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    )
}

export default Users;

//Функции для получения информаиции о пользователях с сервера 
export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();
    return {
        props: {users},//Возвращаемое значение мы помещаем в аргумент компонента
    }
}