<?php

class Course
{
    private string $title;
    private string $description;
    private string $image;
    private string $buttonLink;
    private ?int $id;

    public function __construct( string $title, string $description, string $image, string $buttonLink, ?int $id = null)
    {
        $this->id = $id;
        $this->title = $title;
        $this->description = $description;
        $this->image = $image;
        $this->buttonLink = $buttonLink;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): void
    {
        $this->id = $id;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function getImage(): string
    {
        return $this->image;
    }

    public function getButtonLink(): string
    {
        return $this->buttonLink;
    }
}
