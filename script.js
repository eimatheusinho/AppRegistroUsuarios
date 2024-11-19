const form = document.getElementById('userForm');
const listBtn = document.getElementById('listBtn');
const userList = document.getElementById('userList');

let users = [];
let editIndex = null;

// Adicionar ou atualizar usuários
function addUser(name, age, course) {
    if (editIndex !== null) {
        // Atualiza o usuário existente
        users[editIndex] = { name, age, course };
        editIndex = null; // Limpa o índice de edição após a atualização
    } else {
        users.push({ name, age, course });
    }
}

// Display de usuários
function displayUsers() {
    userList.innerHTML = '';
    users.forEach((user, index) => {
        const userHTML = `
        <div class="userItem">
            <h3>${user.name}</h3>
            <p>Idade: ${user.age}</p>
            <p>Curso: ${user.course}</p>
            <button class="editBtn" onclick="editUser(${index})">Editar</button>
            <button class="deleteBtn" onclick="deleteUser(${index})">Deletar</button>
        </div>    
        `;
        userList.insertAdjacentHTML('beforeend', userHTML);
    });
}

// Função deletar
function deleteUser(index) {
    users.splice(index, 1);
    displayUsers();
}

// Função editar
function editUser(index) {
    const user = users[index];
    document.getElementById('name').value = user.name;
    document.getElementById('age').value = user.age;
    document.getElementById('course').value = user.course;
    editIndex = index; // Definir o índice do usuário em edição
}

// Toggle da lista de usuários
function toggleUsersList() {
    userList.classList.toggle('hidden');
    if (!userList.classList.contains('hidden')) {
        displayUsers();
    }
}

// Formulário para inserir ou atualizar usuário
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const course = document.getElementById('course').value;
    addUser(name, age, course);
    form.reset();
});

// Btn listagem
listBtn.addEventListener('click', toggleUsersList);
