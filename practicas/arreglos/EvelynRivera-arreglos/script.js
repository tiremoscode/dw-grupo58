let items = []; // Arreglo para almacenar los elementos
let editIndex = null; // Índice del elemento que se está editando

// Función para renderizar la tabla
function renderTable() {
  const tableBody = document.getElementById('itemTableBody');
  tableBody.innerHTML = ''; // Limpiar el contenido actual

  items.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item}</td>
      <td>
        <button onclick="editItem(${index})">Editar</button>
        <button onclick="deleteItem(${index})">Eliminar</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Función para agregar un nuevo elemento
function addItem() {
  const input = document.getElementById('itemInput');
  const value = input.value.trim();

  if (value === '') {
    alert('Por favor, escribe un elemento.');
    return;
  }

  if (editIndex !== null) {
    // Si estamos editando, actualizamos el elemento
    items[editIndex] = value;
    editIndex = null;
  } else {
    // Si no estamos editando, agregamos el elemento
    items.push(value);
  }

  input.value = ''; // Limpiar el input
  renderTable(); // Actualizar la tabla
}

// Función para editar un elemento
function editItem(index) {
  const input = document.getElementById('itemInput');
  input.value = items[index]; // Poner el valor actual en el input
  editIndex = index; // Guardar el índice en edición
}

// Función para eliminar un elemento
function deleteItem(index) {
  items.splice(index, 1); // Eliminar el elemento del arreglo
  renderTable(); // Actualizar la tabla
}

// Renderizar la tabla inicial (vacía)
renderTable();
