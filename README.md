Тестовое задание на React.

Необходимо сверстать и "оживить" интерефейс, макет которого расположен тут: https://www.figma.com/file/Ti2cpYwuWA5D0WulQAM92x/Test-assignment?node-id=0%3A1

В процессе выполнения тестового задания нужно использовать тестовый API, описание работы с которым см. ниже.

Требования
Интерфейс должен быть сверстан в полном соответствии макету
Внешний вид интерфейса при редактировании должен оформляться с учетом предложенного дизайна компонентов UI
Там, где верстка не предусмотрена дизайном макета, нужно принять самостоятельное решение по внешнему виду элементов
Для реализации интерфейса необходимо использовать ReactJS
Интерфейс должен уметь:
отображать данные, полученные из API
отправлять к API запрос на редактирование данных карточки
отображать обновленные данные после успешного редактирования
загружать/удалять приложенные картинки
отправлять запрос на удаление карточки
Результат выполнения задания должен быть выложен в любой открытый репозиторий
API
Особенности
API возвращает информацию по одной организации GET /companies/12 и одному контакту организации GET /conacts/16.

API не выполняет реальных действий сохранения данных.

API временно сохраняет загруженные изображения.

Адрес
http://135.181.35.61:2112/

Доступ
Работа с API возможна после получения авторизационного токена

Методы API
GET /auth
GET /companies/ID
PATCH /companies/ID
DELETE /companies/ID
POST /companies/ID/image
DELETE /companies/ID/image/IMAGE_NAME
GET /conacts/ID
PATCH /conacts/ID

"commit-1" - реализована верстка боковой части экрана.

"commit-2" - авторизация.

"commit-3" - реализованы get запросы на получение данных с API.

"commit-4" - начало реализации компонента OrganizationItem.

"commit-5" - реализован delete запрос.