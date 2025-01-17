Projeto Fullstack com PHP, Docker e Frontend

Desenvolvedor

Pedro Henrique Damiani Araldi

Descrição

Este projeto é uma aplicação fullstack composta por uma API backend desenvolvida em PHP, seguindo padrões de SOLID, e uma interface frontend para interação com os dados. O backend utiliza uma arquitetura modular com entidades, contratos, repositórios e controladores. O frontend está integrado e utiliza tecnologias modernas para criar uma interface amigável e responsiva. O projeto está configurado para ser executado com Docker, facilitando a configuração e manutenção do ambiente.

Requisitos

Docker

Docker Compose

Como executar o projeto

Clone este repositório:

git clone https://github.com/pedrodamiani21/desafio_revvo

Navegue até o diretório do projeto:

cd seu-repositorio

Execute o comando para iniciar o ambiente Docker:

docker-compose up --build

A API estará disponível em: http://localhost:8000

O frontend estará disponível em: http://localhost:3000

Rotas da API

GET /courses

Lista todos os cursos, com suporte a filtros opcionais.

GET /courses/{id}

Retorna os detalhes de um curso específico pelo ID.

POST /courses

Cria um novo curso. O corpo da requisição deve conter os dados necessários para criação.

PUT /courses/{id}

Atualiza um curso existente pelo ID. O corpo da requisição deve conter os dados a serem atualizados.

DELETE /courses/{id}

Exclui um curso específico pelo ID.

Erro 404

Caso a rota não seja encontrada, a API retorna:

{
  "error": "Route not found."
}

Estrutura do Projeto

Backend

controllers/: Contém os controladores responsáveis por lidar com as requisições.

services/: Contém a lógica de negócio.

repositories/: Implementações de repositório, incluindo repositórios em memória.

Frontend

Aplicação frontend desenvolvida para consumir as rotas da API e fornecer uma interface amigável ao usuário.

Configuração para execução em http://localhost:3000.
