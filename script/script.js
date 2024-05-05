//Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

// let foundDiv = document.querySelector(".numbers")

// for(let i=100; i>=50;i){
//     let pElem = document.createElement("p")
//     pElem.textContent  = i
//     foundDiv.appendChild(pElem)
//     i=i-10
// }

//вопрос дня: почему нельзя написать в цикле for(let i=100; i>=50;i-10)? Цикл зацикливается и страница в браузере уходит в бесконечный цикл.


//================================

//Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

// let fDiv = document.querySelector(".strings_container")
// let arr = ['write', 'your', 'number', 'if', 'you', 'want']
// for(let i=0; i<=arr.length; i++){
//     let pEl = document.createElement("p")
//     pEl.innerText = arr[i]
//     fDiv.append(pEl)

// }

// ======================================

//Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

let users = [
    {
        first_name: "Ivan",
        last_name: "Ivanov",
        age: 32,
    },
    {
        first_name: "Peter",
        last_name: "Petrov",
        age: 15,
    },
    {
        first_name: "Axel",
        last_name: "Alexeev",
        age: 24,
    },
    {
        first_name: "Max",
        last_name: "Smith",
        age: 50,
    }
]

let uC = document.querySelector(".users_container")
for(let i=0; i<users.length;i++){
    if(users[i].age<=18){
        let{first_name, last_name, age} = users[i]

        let fn = document.createElement("p")
        fn.innerText = first_name
        
        let ln = document.createElement("p")
        ln.innerText = last_name
        
        let ag = document.createElement("p")
        ag.innerText = age
        
        uC.append(fn, ln, ag)
    }
}



