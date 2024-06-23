document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskTime = document.getElementById('taskTime');
    const listaDia = document.getElementById('dayTasks').querySelector('.lista-tarefas');
    const listaNoite = document.getElementById('nightTasks').querySelector('.lista-tarefas');

    function adicionarTarefa(evento) {
        evento.preventDefault();

        const novaTarefa = taskInput.value.trim();

        if (novaTarefa !== '') {
            const newTask = criarItemTarefa(novaTarefa);

            if (taskTime.value === 'dayTasks') {
                listaDia.appendChild(newTask);
            } else if (taskTime.value === 'nightTasks') {
                listaNoite.appendChild(newTask);
            }

            taskInput.value = '';
        } else {
            console.log("Task input is empty");
        }
    }

    function criarItemTarefa(texto) {
        const newTask = document.createElement('li');
        newTask.classList.add('tarefa');
        newTask.textContent = texto;

        const imagemExcluir = document.createElement('img');
        imagemExcluir.src = './img/delete_6861294.png'; 
        imagemExcluir.alt = 'Excluir';
        imagemExcluir.classList.add('btn-excluir'); 
        imagemExcluir.addEventListener('click', function() {
            newTask.remove();
        });
        newTask.appendChild(imagemExcluir);

        return newTask;
    }

    form.addEventListener('submit', adicionarTarefa);
});
