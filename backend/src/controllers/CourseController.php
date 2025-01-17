<?php

class CourseController
{
    private CourseService $courseService;

    public function __construct(CourseService $courseService)
    {
        $this->courseService = $courseService;
    }
    public function findAllCourses($filters = [])
    {
        try {
            $courses = $this->courseService->getAllCourses($filters);
    
            header('Content-Type: application/json');
            echo json_encode($courses);
        } catch (Exception $e) {
            $this->handleException($e);
        }
    }
    public function findCourseById($id)
    {
        try {
            $course = $this->courseService->getCourseById($id);
            if ($course) {
                header('Content-Type: application/json');
                echo json_encode($course);
            } else {
                header("HTTP/1.1 404 Not Found");
                echo json_encode(['error' => 'Course not found']);
            }
        } catch (Exception $e) {
            $this->handleException($e);
        }
    }

    public function createCourse()
    {
        try {
            $data = json_decode(file_get_contents('php://input'), true);

            if (is_null($data)) {
                throw new Exception('Invalid data received. Expected JSON format.');
            }

            $this->courseService->createCourse($data);
            header('Content-Type: application/json');
            header("HTTP/1.1 201 Created");
            echo json_encode(['message' => 'Course created']);
        } catch (ValidationException $ve) {
            header("HTTP/1.1 400 Bad Request");
            echo json_encode(['error' => 'Validation error', 'details' => $ve->getErrors()]);
        } catch (Exception $e) {
            $this->handleException($e);
        }
    }

    public function updateCourse($id)
    {
        try {
            $data = json_decode(file_get_contents('php://input'), true);
            if (is_null($data)) {
                throw new Exception('Invalid data received. Expected JSON format.');
            }

            $this->courseService->updateCourse($id, $data);
            header('Content-Type: application/json');
            echo json_encode(['message' => 'Course updated']);
        } catch (Exception $e) {
            $this->handleException($e);
        }
    }

    public function deleteCourse($id)
    {
        try {
            $this->courseService->deleteCourse($id);
            header('Content-Type: application/json');
            echo json_encode(['message' => 'Course deleted']);
        } catch (Exception $e) {
            $this->handleException($e);
        }
    }

    private function handleException(Exception $e)
    {
        header("HTTP/1.1 400 Bad Request");
        header('Content-Type: application/json');
        echo json_encode([
            'error' => 'An error occurred',
            'message' => $e->getMessage(),
            'trace' => $e->getTraceAsString() 
        ]);
    }
}
