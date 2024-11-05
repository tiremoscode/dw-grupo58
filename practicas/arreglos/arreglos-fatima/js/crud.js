const books = []; // Se almacenan los libros en un arreglo de arreglos
let editIndex = -1; // Índice para edición, -1 significa "no estamos editando"

function addBook() {
    // Crear un arreglo que representa un libro
    const book = [
        document.getElementById('titulo').value, 
        document.getElementById('autor').value,
        document.getElementById('editorial').value,
        document.getElementById('anio').value, 
        document.getElementById('genero').value
    ];

    if (book.includes('')) { // Validación de campos
        alert('Por favor llena todos los campos');
        return;
    }

    // Verificar si estamos en modo agregar o edición
    if (editIndex === -1) { 
        // Si editIndex es -1, agregamos el libro
        books.push(book); 
    } else {
        // Si editIndex tiene un valor, estamos en modo edición, reemplazamos el libro en la posición editIndex
        books[editIndex] = book; 
        editIndex = -1; // Reiniciar editIndex para salir del modo edición
    }

    // Limpiar los campos del formulario
    document.getElementById('titulo').value = '';
    document.getElementById('autor').value = '';
    document.getElementById('editorial').value = '';
    document.getElementById('anio').value = '';
    document.getElementById('genero').value = '';

    showBooks(); 
}

function showBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Limpia la lista antes de mostrarla de nuevo

    books.forEach((book, index) => { 
        const row = document.createElement('tr'); 
        row.innerHTML = `
            <td>${book[0]}</td>
            <td>${book[1]}</td>
            <td>${book[2]}</td>
            <td>${book[3]}</td>
            <td>${book[4]}</td>
            <td class="d-flex justify-content-between">
                <button class="btn btn-danger" onclick="deleteBook(${index})">Eliminar</button> 
                <button class="btn btn-light" onclick="editBook(${index})">Editar</button>
            </td>
        `;
        bookList.appendChild(row); 
    });
}

function deleteBook(index) {
    books.splice(index, 1); // Eliminar el libro de la posición index
    showBooks(); 
}

function editBook(index) {
    const book = books[index]; 
    // Llenar los campos del formulario con los valores del libro que estamos editando
    document.getElementById('titulo').value = book[0];
    document.getElementById('autor').value = book[1];
    document.getElementById('editorial').value = book[2];
    document.getElementById('anio').value = book[3];
    document.getElementById('genero').value = book[4];

    // Guardar el índice del libro que estamos editando
    editIndex = index; // Ahora sabemos que editIndex tiene un valor, indicando "modo edición"
}
