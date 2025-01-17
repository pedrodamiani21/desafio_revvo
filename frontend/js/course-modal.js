document.body.insertAdjacentHTML('beforeend', `
    <div id="modal" class="modal">
        <div class="modal-content">
            <span class="close-btn" onclick="closeModal()">&times;</span>
            <h2>Adicionar Novo Curso</h2>
            <form id="add-course-form">
                <input type="text" id="course-title" placeholder="Título do Curso" required>
                <textarea id="course-description" placeholder="Descrição do Curso" required></textarea>
                <input type="text" id="course-url" placeholder="URL" required>
                <button type="submit">Salvar</button>
            </form>
        </div>
    </div>
    `);
    
    function openModal() {
        document.getElementById('modal').style.display = 'flex';
    }
    
    function closeModal() {
        document.getElementById('modal').style.display = 'none';
    }
    
    document.getElementById('add-course-form').addEventListener('submit', function (event) {
        event.preventDefault();
        
        const title = document.getElementById('course-title').value;
        const description = document.getElementById('course-description').value;
        const url = document.getElementById('course-url').value;
        
        if (!title || !description) {
            showErrorNotification('Título e descrição são obrigatórios!');
            return;
        }
    
        const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        if (url && !urlPattern.test(url)) {
            showErrorNotification('URL inválida!');
            return;
        }
    
        addNewCourse(title, description, url);
        showSuccessNotification();
    });
    
    
    function addNewCourse(title, description, url) {
        const form = {
            title: title,
            description: description,
            buttonLink: url,
            image: "https://media.istockphoto.com/id/1370433251/photo/black-woman-sitting-at-desk-using-computer-writing-in-notebook.jpg?s=612x612&w=0&k=20&c=rHpy3cX4LVFtzLI4gyy0T-fNYdTeAcdNQgTmy9maAIA="
        };
    
        fetch('http://localhost:8870/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao adicionar o curso');
            }
            return response.json();
        })
        .then(data => {
            console.log('Curso adicionado:', data);
            closeModal();
            renderCourses();
            showSuccessNotification();
            clearModalFields();
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    }
    
    function clearModalFields() {
        document.getElementById('course-title').value = '';
        document.getElementById('course-description').value = '';
        document.getElementById('course-url').value = '';
    }
    
    function showSuccessNotification() {
        const notification = document.createElement('div');
        notification.textContent = 'Curso adicionado com sucesso!';
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = 'green';
        notification.style.color = 'white';
        notification.style.padding = '10px';
        notification.style.borderRadius = '5px';
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
    
    function showErrorNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = 'red';
        notification.style.color = 'white';
        notification.style.padding = '10px';
        notification.style.borderRadius = '5px';
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
    