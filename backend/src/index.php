<?php

// Permite solicitações de qualquer origem (ou você pode restringir a origens específicas)
header("Access-Control-Allow-Origin: *");

// Permite métodos como GET, POST, PUT, DELETE, etc.
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

// Permite os cabeçalhos que podem ser usados na requisição
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Se for uma requisição OPTIONS, apenas finalize a resposta
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// O resto do seu código PHP, como a inclusão de arquivos e o roteamento
require_once  'routes.php';

// Aqui, você pode continuar a lógica da sua API, como de costume.
?>
