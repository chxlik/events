//     - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
//
// const myElement = document.getElementById('text')
//
// text.onclick = (ev => {
//  text.hidden = true
// })
//
//     - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
// button1.onclick = (ev => {
//     button1.hidden = true
// })
//
// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
// const input1 = document.getElementById('input1');
// const button1 = document.getElementById('button1')
//
// button1.onclick = (ev => {
//     if (+input1.value < 18) {
//     alert('you r too young')
//     }
// })
//
// - Створіть меню, яке розгортається/згортається при клику
//  const input1 = document.getElementById('input1');
//  const button1 = document.getElementById('button1')
// let flag = true
//  button1.onclick = (ev => {
//     menu.style.display = flag ?'none' : 'block'
//      flag = !flag
//  })

// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.
// const comments = [
//     {
//         "postId": 1,
//         "id": 1,
//         "name": "id labore ex et quam laborum",
//         "email": "Eliseo@gardner.biz",
//         "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//     },
//     {
//         "postId": 1,
//         "id": 2,
//         "name": "quo vero reiciendis velit similique earum",
//         "email": "Jayne_Kuhic@sydney.com",
//         "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
//     },
//     {
//         "postId": 1,
//         "id": 3,
//         "name": "odio adipisci rerum aut animi",
//         "email": "Nikita@garfield.biz",
//         "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
//     },
//     {
//         "postId": 1,
//         "id": 4,
//         "name": "alias odio sit",
//         "email": "Lew@alysha.tv",
//         "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
//     },
//     {
//         "postId": 1,
//         "id": 5,
//         "name": "vero eaque aliquid doloribus et culpa",
//         "email": "Hayden@althea.biz",
//         "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
//     },
//     {
//         "postId": 2,
//         "id": 6,
//         "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
//         "email": "Presley.Mueller@myrl.com",
//         "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
//     }
// ];
// const rootElement = document.getElementById('root')
// comments.forEach(item => {
//     const header = document.createElement('h1')
//     const body = document.createElement('p')
//     const div = document.createElement('div')
//     const button = document.createElement('button')
//
//     button.innerText = 'Hide comment'
//     button.onclick = () => {
//         body.hidden = !body.hidden
//     }
//
//     body.innerHTML = item.body;
//     header.innerHTML = item.name;
//
//     div.appendChild(header);
//     div.appendChild(body);
//     div.appendChild(button)
//
//     rootElement.appendChild(div)
// })


// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//const but1 = document.getElementById('but1')

//but1.onclick = ev => {
//    const myForms = document.forms
//   for (let item of myForms) {
//        for (let my_input of item) {
//            console.log(my_input.value)
//        }
//    }
//}


