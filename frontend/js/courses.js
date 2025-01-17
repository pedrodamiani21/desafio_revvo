let courses = [];

async function renderCourses(filter) {
    courses = await getCourses(filter);
    const container = document.getElementById('courses');
    
    if (courses.length === 0) {
        container.innerHTML = '';
    } else {
        container.innerHTML = courses.map(course => `
            <div class="card">
                <img src="${course.image}" alt="${course.title}">
                <div class="text-container">
                    <h1 class="card-title">${course.title.toUpperCase()}</h1>
                    <h2 class="card-subtitle">${course.description}</h2>
                </div>
                <div class="button-container">
                    <button>
                        <a href="${course.buttonLink}" style="text-decoration: none; color: inherit;" target="_blank">Ver Curso</a>
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    container.innerHTML += `
        <div class="card button-add-curso" onclick="openModal()">Adicionar Curso</div>
    `;
}

function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

async function getCourses(filter) {
    try {
        const url = new URL('http://localhost:8870/courses');
        
        // Se houver filtros, adiciona-os à URL como parâmetros
        if (filter) {
            url.searchParams.append('filter', filter);
        }

        const response = await fetch(url, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Erro ao adicionar o curso');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro:', error);
        return [];
    }
}

function filterCourses() {
    const searchInput = document.querySelector('.search-bar input');
    const search = searchInput.value.toLowerCase();

    renderCourses(search);
}

renderCourses(); 
