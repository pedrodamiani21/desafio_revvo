<?php

require_once 'repositories/CourseRepository.php';

class CourseService
{
    private CourseRepository $courseRepository;

    public function __construct(CourseRepository $courseRepository)
    {
        $this->courseRepository = $courseRepository;
    }

    public function getAllCourses(array $filters = []): array
    {
        return $this->courseRepository->findAll($filters);
    }

    public function getCourseById(int $id): ?array
    {
        $course = $this->courseRepository->findById($id);
        if ($course) {
            return [
                'id' => $course->getId(),
                'title' => $course->getTitle(),
                'description' => $course->getDescription(),
                'image' => $course->getImage(),
                'buttonLink' => $course->getButtonLink()
            ];
        }
        return null;
    }

    public function createCourse(array $data): void
    {
        if (empty($data['title']) || empty($data['description']) || empty($data['image']) || empty($data['buttonLink'])) {
            throw new Exception("Todos os campos são obrigatórios.");
        }
    
        $course = new Course(
            $data['title'],
            $data['description'],
            $data['image'],
            $data['buttonLink'],
        );
    
        $this->courseRepository->save($course);
    }

    public function updateCourse(int $id, array $data): void
    {
        if (empty($id)) {
            throw new Exception('O ID do curso é obrigatório.');
        }
        $course = new Course(
            $data['title'],
            $data['description'],
            $data['image'],
            $data['buttonLink'],
            $id,
        );
        $this->courseRepository->update($course);
    }

    public function deleteCourse(int $id): void
    {
        if (empty($id)) {
            throw new Exception('O ID do curso é obrigatório.');
        }
        $this->courseRepository->destroy($id);
    }

}
