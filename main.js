/*У вас есть массив из 5-ти пользователей
const users = [
    {
        name: 'Vasya',
        lastName: 'Ivanov',
        city: 'Berlin'
    },
]
при загрузке страницы показывается весь массив списком, по клику на юзера из списка описание юзера по которому кликнули должно менять цвет(например на синий),
    при перезагрузке страницы выделенный юзер остается синим*/
const users = [
    {
        name: 'Vasya',
        lastName: 'Ivanov',
        city: 'Berlin'
    },
    {
        name: 'Pedro',
        lastName: 'Olmavre',
        city: 'Barselona'
    },
    {
        name: 'Maria',
        lastName: 'Lomone',
        city: 'Bolivia'
    },
    {
        name: 'Stive',
        lastName: 'Kolombo',
        city: 'Miami'
    },
    {
        name: 'Larisa',
        lastName: 'Sopog',
        city: 'Moskow'
    }
];

const wrapper = document.querySelector('.wrapper');
const ul = document.createElement('ul');
wrapper.append(ul);


function renderLiOfUser(users) {
    const index = JSON.parse(localStorage.getItem('userId'));
    for (let i = 0; i < users.length; i++) {
        const li = document.createElement('li');
        li.classList.add('user');
        li.onclick = onclickHandler;
        li.innerHTML = `
            <p class="Name" id=${i}>Name: ${users[i].name}<p>
            <p class="LastName">Last name: ${users[i].lastName}<p>
            <p class="city">City: ${users[i].city}<p>`;
        if (i == index) {
            li.click();
        }
        li.setAttribute('data-index', i);
        ul.append(li);
        console.log(users);
    }
}
renderLiOfUser(users);

function onclickHandler(event) {
    const usersList = ul.querySelectorAll('li');
    usersList.forEach(el => el.style.backgroundColor = 'bisque');
    event.currentTarget.style.backgroundColor = 'lightblue';
    const index = event.currentTarget.dataset.index;
    localStorage.setItem('userId', index);
}