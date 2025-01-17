document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem('modalShown')) {
        const modal = document.createElement('div');
        modal.id = 'initial-modal';
        modal.classList.add('modal');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const closeButton = document.createElement('span');
        closeButton.id = 'close-modal';
        closeButton.classList.add('close');
        closeButton.innerHTML = '&times;';

        const image = document.createElement('img');
        image.src = 'https://media.istockphoto.com/id/1370433251/photo/black-woman-sitting-at-desk-using-computer-writing-in-notebook.jpg?s=612x612&w=0&k=20&c=rHpy3cX4LVFtzLI4gyy0T-fNYdTeAcdNQgTmy9maAIA='; // Substitua com o URL da sua imagem
        image.alt = 'Imagem do modal';
        image.style.width = '100%'; // A imagem ocupará 100% da largura do modal
        image.style.height = '50%'; // A imagem ocupará 50% da altura do modal

        const title = document.createElement('h2');
        title.textContent = 'EGESTAS TORTOR VULPUTATE';

        const subtitle = document.createElement('p');
        subtitle.textContent = 'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum';

        const button = document.createElement('button');
        button.textContent = 'INSCREVA-SE';
        button.classList.add('modal-btn');

        modalContent.appendChild(closeButton);
        modalContent.appendChild(image);
        modalContent.appendChild(title);
        modalContent.appendChild(subtitle);
        modalContent.appendChild(button);
        modal.appendChild(modalContent);

        document.body.appendChild(modal);

        const style = document.createElement('style');
        style.innerHTML = `
            .modal {
                display: none;
                position: fixed;
                z-index: 300;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.4);
            }
            .modal-content {
                background-color: #fefefe;
                margin: 5% auto;
                padding: 20px;
                border: 1px solid #888;
                width: 80%;
                max-width: 600px;
                text-align: center;
            }
            .close {
                color: #aaa;
                font-size: 28px;
                font-weight: bold;
                position: absolute;
                top: 10px;
                right: 10px;
                cursor: pointer;
            }
            .close:hover,
            .close:focus {
                color: black;
                text-decoration: none;
            }
            .modal-btn {
                background-color: #007bff;
                color: white;
                padding: 12px 24px;
                border: none;
                border-radius: 50px;
                font-size: 16px;
                cursor: pointer;
                transition: background-color 0.3s;
            }
            .modal-btn:hover {
                background-color: #0056b3;
            }
            img {
                margin-bottom: 15px;
                border-radius: 8px;
            }
        `;
        document.head.appendChild(style);

        modal.style.display = 'block';

        closeButton.onclick = function () {
            modal.style.display = 'none';
            localStorage.setItem('modalShown', 'true');
        };

        button.onclick = function () {
            modal.style.display = 'none';
            localStorage.setItem('modalShown', 'true');
        };

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                localStorage.setItem('modalShown', 'true');
            }
        };
    }
});
