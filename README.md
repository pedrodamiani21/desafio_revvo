# desafio_revvo

# Projeto API com PHP e Docker

## Desenvolvedor
**Pedro Henrique Damiani Araldi**

## Descrição
Este projeto é uma API criada em PHP que segue padrões de SOLID. Ela utiliza uma arquitetura modular com entidades, contratos, repositórios e controladores. O projeto também está configurado para uso com Docker, o que facilita a execução e manutenção do ambiente.

## Requisitos
- Docker
- Docker Compose

## Como executar o projeto
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd seu-repositorio
   ```
3. Execute o comando para iniciar o ambiente Docker:
   ```bash
   docker-compose up --build
   ```
4. A API estará disponível em: `http://localhost:8870`

## Rotas da API

### **GET** `/courses`
Lista todos os cursos, com suporte a filtros opcionais.

### **GET** `/courses/{id}`
Retorna os detalhes de um curso específico pelo ID.

### **POST** `/courses`
Cria um novo curso. O corpo da requisição deve conter os dados necessários para criação.

### **PUT** `/courses/{id}`
Atualiza um curso existente pelo ID. O corpo da requisição deve conter os dados a serem atualizados.

### **DELETE** `/courses/{id}`
Exclui um curso específico pelo ID.

### **Erro 404**
Caso a rota não seja encontrada, a API retorna:
```json
{
  "error": "Route not found."
}
```

## Estrutura do Projeto
- **controllers/**: Contém os controladores responsáveis por lidar com as requisições.
- **services/**: Contém a lógica de negócio.
- **repositories/**: Implementações de repositório, incluindo repositórios em memória.

5. Frontend disponível em: `http://localhost:3000`

