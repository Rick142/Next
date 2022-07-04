<!--
Серверный рендеринг на React JS на примере фреймворка Next JS

ТЕОРИЯ
Next JS - обёртка над React. Его суть - страница рендерится ещё на сервере, и мы получаем готовый html - файл. Такой подход используется, поскольку в single page applications есть проблема с seo оптимизацией. (Хотя говорят, что эта проблема уже была решена)

ИНИЦИАЛИЗАЦИЯ И ЗАВИСИМОСТИ
npm init -y
npm i next react react-dom
npm i sass

ЗАПУСК ПРИЛОЖЕНИЯ
В package.json прописана вручную команда запуска: next dev
Запуск приложения: npm run dev

МАРШРУТИЗАЦИЯ
Обязательной в приложенни является папка pages со страницами. Название папки зарезервировано и оно является частью маршрута. В Next JS наименование файла также является частью маршрута.

ДИНАМИЧЕСКАЯ МАРШРУТИЗАЦИЯ
С помощью папки users создан динамический маршрут. Название папки зарезервировано. В нём название файла задаётся по шаблону [...].js. Название в скобках выцепляется по шаблону ниже:

 <Link href={`/users/${user.id}`}>

 В фигурных скобках указывается уникальный идентификатор.

 ГЛОБАЛЬНЫЕ И ВНУТРИННИЕ СТИЛИ 
 Используются для отключения отступов на странице по умолчанию. 
 Сами стили невозможно просто подключить в файл. Необходимо создать обёртку с названием _app.js (Зарезервировано) и уже там проводить подключение. Обёртка также используется и для других функций. Для подключения стилей внутри можно использовать конструкцию: 

 <style jsx>
    {`
        .navbar {
            background: orange;
            padding: 15px;
        }
    `}
</style>

ЛОКАЛЬНЫЕ СТИЛИ ДЛЯ КОМПОНЕНТА 
Файл стилей должен содержать название компонента, в который подключается и .module.css.
Подключение файла стилей в компоненте стандартно. 


ПРЕПРОЦЕССОРЫ
Подключим зависимость npm i sass. 
Препроцессоры подключаются также, как и css файлы.

ЗАПРОСЫ НА СЕРВЕР
В качестве сервера - JSON placeholder. 
Как в React хук useEffect использовать не получится, тк серверный рендеринг в данным случае не происходит. Для этого используются функции getStaticProps,  getInitialProps , getServerSideProps. Примеры в файле users.js (Статическая ссылка) и [id].js (Динамическая ссылка).


SEO ОПТИМИЗАЦИЯ И META - ТЕГИ
Для удобства указания ключевых слов, meta-теги вынесены в общий для всех контейнер (MainContainer.js), где в качестве props указываются и keywords. Также в главном контейнере можно указывать общие для всех страниц компоненты. Для помещения в них комопнентов используется аргумент children. 

ДЕПЛОЙ
В package.json, помимо скрипта разработки "dev": "next dev", добавляем и другие, как показано ниже:

 "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },

Скрипт build создаёт финальную сборку приложения.
Скрипт start запускает приложение.

Длаее необходимо оздать Git - репозиторий, предватритольно создав .gitignore, для того, чтобы не загружать файлы зависимостей на GitHub.
Далее инициализируем репозиторий: git init 
Создаём репозиторий на GitHub.
Индексируем файлы: git add .
Коммитим: git commit -m "first commit"
Добавляем ссылку на удалённый Git - репозиторий: git remote add origin ссылка на репозиторий
Пушим: git push origin master 

Далее переходим на сайт nextjs.org, где жмём на "Deploy on platform made for Next.js". Далее "Deploy free", логинимся, импортируем нужный Git - репозиторий, выбираем пользователя, настраиваем и наживаем Deloy. Таким образом можно деплоить учебные проекты, или делиться ими с работодателем.


-->