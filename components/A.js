//Компонент для ссылок.
import Link from "next/link"//Компонент, отключающий обновление браузера по умолчанию
import styles from '../styles/A.module.css'//Подключение стилей локально.

export default function A ({text, href}) {//Аргументы функции - текст и путь
    return ( 
        <Link href={href}>
            <a className={styles.link}>{text}</a>
        </Link>
    )
}