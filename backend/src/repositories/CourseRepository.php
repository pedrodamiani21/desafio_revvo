<?php

interface CourseRepository
{
    public function findAll(array $data): array;
    public function findById(int $id): ?Course;
    public function save(Course $course): void;
    public function update(Course $course): void;
    public function destroy(int $id): void;
}
