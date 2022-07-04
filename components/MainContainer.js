//Это обёртка, которая содержит в себе неизменяемые чати страницы (Например navbar)
import A from "../components/A"//Импорт кастомного компонента
import Head from 'next/head';//Модуль для meta-тегов


const MainContainer = ({children, keywords}) => {//children нужен чтобы добавлять в контейнер другие компоненты, keywords - уникальные слова для каждой страницы
    return (
        <>{/*Это React - фрагмент*/}
            {/*В теге Head проходит добавление meta - тегов, и прочих заголовков*/}
            <Head>
                {/*В SEO - оптимизации ключевые слова используются для лучшей поисковой выдачи сайта*/}
                <meta keywords={"next js, yura" + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <div className="navbar">
                {/*Здесь используем кастомный компонент*/}
                <A href={'/'} text="Главная"/>
                <A href={'/users'} text="Пользователи"/>
            </div>
            <div>
                {children}
            </div>
            {/*Таким образом указываются стили в файле*/}
            <style jsx>
                {`
                .navbar {
                    background: orange;
                    padding: 15px;
                }
                `}
            </style>
        </>
    )
}

export default MainContainer;