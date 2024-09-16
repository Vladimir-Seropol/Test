const taskInput = document.querySelector('#task');
const plus = document.querySelector('#plus');
const plusTask = document.querySelector('#plusTask');

// Загрузка задач из localStorage при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
    loadTasks();

});

// Сохранение задачи в localStorage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []; //  проверка на наличие данных в localStorage
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

}

// Удаление задачи из localStorage
function removeTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));

    }

}

// Загрузка задач из localStorage
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const plusTask = document.getElementById('plusTask');
    
    tasks.forEach(function (task) {
        let li = document.createElement('li');
        li.textContent = task;
        li.className = 'li';

        // Получаем  input
        const block = document.createElement('div');
        block.classList.add('action-block');

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = 'checkboxId';

        // Получаем label
        const label = document.createElement('label');
        label.htmlFor = input.id;
        label.textContent = 'Не выполнено';

        // Получаем кнопку "Удалить"
        const button = document.createElement('button');
        button.textContent = ' Удалить';
        button.className = 'button btn';

        // Добавляем элементы в список
        li.appendChild(block);
        block.appendChild(input);
        block.appendChild(label);
        block.appendChild(button);
        plusTask.appendChild(li);

        // Обработчик события для кнопки "Удалить"
        button.addEventListener('click', () => {
            //e.stopPropagation(); 
            removeTask(task);
            li.remove(); // удаляем элемент из DOM
        });

        // Обработчик события для чекбокса
        input.addEventListener('change', () => {
            if (input.checked) {
                li.classList.add('li-active');
                label.textContent = 'Завершено'; 
            } else {
                li.classList.remove('li-active');
                label.textContent = 'Не выполнено'; 
            }
        });
    });
}


//Добавление задач и очищение поля input 
plus.addEventListener('click', (e) => {
    if (taskInput.value === '') {
        e.preventDefault();
        return alert('Заполните поле');

    }

    creatDelitElemets(taskInput.value);
    taskInput.value = '';
    e.preventDefault();
});

function creatDelitElemets(value) {
    const li = document.createElement('li');
    li.className = 'li';
    li.textContent = value;

    plusTask.appendChild(li);

    // Создаем новый элемент input
    const block = document.createElement('div');
    block.classList.add('action-block');

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'checkboxId';

    // Создаем новый элемент label
    const label = document.createElement('label');
    label.htmlFor = input.id;
    label.textContent = 'Не выполнено';
    li.appendChild(block);
    block.appendChild(input);
    block.appendChild(label);

    // Обработчик события для чекбокса
    input.addEventListener('change', () => {
        if (input.checked) {
            li.classList.add('li-active');
            label.textContent = 'Завершено'; // Изменяем текст label, когда чекбокс отмечен
        } else {
            li.classList.remove('li-active');
            label.textContent = 'Не выполнено'; // Возвращаем текст label, когда чекбокс не отмечен
        }
    });




    const button = document.createElement('button');

    block.appendChild(button);
    button.textContent = ' Удалить';
    button.className = 'button btn';



    // Сохранение введенной задачи в localStorage
    saveTask(value);






    //Отметка о выполнении Задачи и ее удаление
 
    button.addEventListener('click', () => {
        //e.stopPropagation(); 
        removeTask(task);
        li.remove(); // удаляем элемент из DOM
        e.preventDefault();
    });

}


