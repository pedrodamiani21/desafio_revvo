<?php

require_once __DIR__ . '/../repositories/RepositoryInterface.php';

class CourseUseCase {
    private $repository;

    public function __construct(RepositoryInterface $repository) {
        $this->repository = $repository;
    }

    public function getAllCourses() {
        return $this->repository->getAll();
    }

    public function createCourse($data) {
        return $this->repository->create($data);
    }
}
