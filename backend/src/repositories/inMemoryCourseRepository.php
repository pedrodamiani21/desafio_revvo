<?php

require_once 'CourseRepository.php';
require_once 'entities/Course.php'; 

class InMemoryCourseRepository implements CourseRepository
{
    private array $courses = [];
    private string $filePath = 'courses.json';

    public function __construct()
    {
        if (!file_exists($this->filePath)) {
            file_put_contents($this->filePath, json_encode([]));
        }

        $jsonData = file_get_contents($this->filePath);
        $this->courses = json_decode($jsonData, true) ?: [];
    }
    public function findAll(array $data): array
    {
       
        if (!empty($data['filter'])) {
            $filter = strtolower($data['filter']); 
            
            return array_filter($this->courses, function($course) use ($filter) {
                return strpos(strtolower($course['title']), $filter) !== false; 
            });
        }
    
        return $this->courses;
    }

    public function findById(int $id): ?Course
    {
        foreach ($this->courses as $course) {
            if ($course['id'] === $id) {
                return new Course($course['id'], $course['title'], $course['description'], $course['image'], $course['buttonLink']);
            }
        }
        return null;
    }

    public function save(Course $course): void
    {
        $id = (int) $this->getNextId();
        $newCourse = [
            'id' => $id,
            'title' => $course->getTitle(),
            'description' => $course->getDescription(),
            'image' => $course->getImage(),
            'buttonLink' => $course->getButtonLink()
        ];

        $this->courses[] = $newCourse;
        file_put_contents($this->filePath, json_encode($this->courses, JSON_PRETTY_PRINT));
    }

    public function update(Course $course): void
    {
        $updated = false;
    
        $this->courses = array_map(function ($existingCourse) use ($course, &$updated) {
            if ($existingCourse['id'] == $course->getId()) {
                $updated = true;  
                return [
                    'id' => $course->getId(),
                    'title' => $course->getTitle(),
                    'description' => $course->getDescription(),
                    'image' => $course->getImage(),
                    'buttonLink' => $course->getButtonLink()
                ];
            }
            return $existingCourse;
        }, $this->courses);
    
        if (!$updated) {
            throw new Exception("Course not found for update.");
        }
    
        file_put_contents($this->filePath, json_encode($this->courses, JSON_PRETTY_PRINT));
    }

    public function destroy(int $id): void
    {
        $this->courses = array_filter($this->courses, function ($course) use ($id) {
            return $course['id'] !== $id;
        });
        $this->courses = array_values($this->courses);
        file_put_contents($this->filePath, json_encode($this->courses, JSON_PRETTY_PRINT));
    }

    private function getNextId(): int
    {
        $maxId = 0;
        foreach ($this->courses as $course) {
            $maxId = max($maxId, $course['id']);
        }
        return $maxId + 1;
    }
}
