document.getElementById('header').innerHTML = `
    <header>
        <div class="logo">LEO</div>
        <div class="search-bar">
            <input type="text" placeholder="Pesquisar cursos..." oninput="filterCourses()">
        </div>
        <div class="user">
            <img src="https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png" alt="User Avatar">
            <span>John Doe</span>
        </div>
    </header>
`;

