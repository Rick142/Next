//Обёртка приложения для подключения стилей и других функций. Название файла зарезервировано.
import '../styles/global.css';//Импорт глобальных стилей

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps}/>
}
