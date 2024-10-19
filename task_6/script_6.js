/*

Задание 6

Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

Заголовок первого input — «номер страницы».
Заголовок второго input — «лимит».
Заголовок кнопки — «запрос».
При клике на кнопку происходит следующее:

Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводится ниже текст «Номер страницы вне диапазона от 1 до 10»;
Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводится ниже текст «Лимит вне диапазона от 1 до 10»;
Если и первый, и второй input не в диапазонах или не являются числами — выводится ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input.
Пример: если пользователь ввёл 5 и 7, то запрос будет вида https://picsum.photos/v2/list?page=5&limit=7.
После получения данных вывести список картинок на экран.

Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно выполненного запроса (использовать localStorage).                

*/


document.addEventListener('DOMContentLoaded', ()=> {
    function onclick(selector, handler) {
        document.querySelector(selector).onclick = handler;
    }
  
    onclick('#btn_fetch', (event) => act_fetch(event));
});


const response_container = document.querySelector('#response_container');
const images = document.querySelector('.response__images');

function act_fetch(event) {
    event.preventDefault();

    // let id = document.querySelector("#user_id").value;
    // if (!id) {
    //     id = '1'; // default user id
    // }

    // const url = `https://jsonplaceholder.typicode.com/users/${id}/todos`;

    fetch('https://picsum.photos/v2/list?page=1&limit=6')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            updateResponse(data);
        });
}

function clearResponse() {
    while (images.firstChild) {
        images.removeChild(images.lastChild);
    };
}

function addItem(text, className = '') {
    const li = document.createElement("li");
    li.innerText = text;

    if (className) {
        li.classList.add(className);
    }

    images.appendChild(li);
}

function hideResponse() {
    response_container.classList.add('page__content--hidden');
}

function showResponse() {
    response_container.classList.remove('page__content--hidden');
}

function updateResponse(data) {

    console.log(data);



    // hideResponse();

    // clearResponse();

    // if (!data || data.length === 0) {
    //     addItem(`Пользователь с id=${id} не найден `);
    // } else {
    //     data.forEach(element => {
    //         addItem(element.title, element.completed ? 'response__list--completed' : '');
    //     });
    // }

    // showResponse();
}
