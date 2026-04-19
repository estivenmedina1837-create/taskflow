// Encontramos los elementos en la página
const inputTarea = document.getElementById('inputTarea')
const btnAgregar = document.getElementById('btnAgregar')
const listaTareas = document.getElementById('listaTareas')

// Cuando el usuario hace clic en Agregar
btnAgregar.addEventListener('click', function() {
    
    // Leemos lo que escribió el usuario
    const textoTarea = inputTarea.value

    // Si el input está vacío no hacemos nada
    if (textoTarea === '') return

    // Creamos un elemento de lista
    const li = document.createElement('li')
    li.className = 'tarea-item'
    li.innerHTML = `
        <span class="tarea-texto">${textoTarea}</span>
        <button class="btn-completar">✓</button>
    `

    // Agregamos la tarea a la lista
    listaTareas.appendChild(li)

    // Limpiamos el input
    inputTarea.value = ''

    // Cuando hacen clic en completar
    li.querySelector('.btn-completar').addEventListener('click', function() {
        li.classList.toggle('completada')
    })
})