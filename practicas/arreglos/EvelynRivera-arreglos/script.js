let items = []; // Arreglo para almacenar los elementos
let editIndex = null; // Índice del elemento en edición

// Función para mostrar la tabla
function renderTable() {
  const tableBody = document.getElementById('itemTableBody');
  tableBody.innerHTML = ''; // Limpiar tabla

  // Recorrer el arreglo y generar las filas
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

// Función para agregar un elemento
function addItem() {
  const input = document.getElementById('itemInput');
  const value = input.value.trim();

  if (value === '') {
    alert('Por favor, escribe un elemento.');
    return;
  }

  if (editIndex !== null) {
    // Actualizar un elemento existente
    items[editIndex] = value;
    editIndex = null;
  } else {
    // Agregar un nuevo elemento al arreglo
    items.push(value);
  }

  input.value = ''; // Limpiar campo de entrada
  renderTable(); // Actualizar tabla
}

// Función para editar un elemento
function editItem(index) {
  const input = document.getElementById('itemInput');
  input.value = items[index]; // Mostrar el valor en el campo de entrada
  editIndex = index; // Guardar el índice para editar
}

// Función para eliminar un elemento
function deleteItem(index) {
  items.splice(index, 1); // Eliminar el elemento del arreglo
  renderTable(); // Actualizar tabla
}

// Mostrar la tabla inicial (vacía)
renderTable();
