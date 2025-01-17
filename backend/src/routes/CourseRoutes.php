<?php

require_once 'Controllers/CourseController.php';
require_once 'Services/CourseService.php';
require_once 'Repositories/InMemoryCourseRepository.php';
require_once 'Repositories/CourseRepository.php';

require_once 'Controllers/CourseController.php';
require_once 'Services/CourseService.php';
require_once 'Repositories/InMemoryCourseRepository.php';
require_once 'Repositories/CourseRepository.php';

$courseRepository = new InMemoryCourseRepository();
$courseService = new CourseService($courseRepository);
$courseController = new CourseController($courseService);

$method = $_SERVER['REQUEST_METHOD'];
$requestUri = $_SERVER['REQUEST_URI'];

if (strpos($requestUri, '/courses') !== false && $method === 'GET') {
    $filters = !empty($_GET) ? $_GET : [];

    $courseController->findAllCourses($filters);
} elseif (preg_match('/^\/courses\/(\d+)$/', $requestUri, $matches) && $method === 'GET') {
    $courseController->findCourseById($matches[1]);
} elseif ($requestUri === '/courses' && $method === 'POST') {
    $courseController->createCourse();
} elseif (preg_match('/^\/courses\/(\d+)$/', $requestUri, $matches) && $method === 'PUT') {
    $courseController->updateCourse($matches[1]);
} elseif (preg_match('/^\/courses\/(\d+)$/', $requestUri, $matches) && $method === 'DELETE') {
    $courseController->deleteCourse($matches[1]);
} else {
    header("HTTP/1.1 404 Not Found");
    echo "Route not found.";
}

