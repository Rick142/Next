//Главная страница в приложении. В маршруте не указывается.

import MainContainer from "../components/MainContainer";//Главный контейнер с meta-тегами и navbar

const Index = () => {
    return (
        //Как props можем указывать keywords
        <MainContainer keywords={'main page'}>
            <h1>Главная страница</h1>
        </MainContainer>
    )
}

export default Index;