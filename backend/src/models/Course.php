<?php
class CourseModel {
    public $id;
    public $title;
    public $description;

    public function __construct($id = null, $title = '', $description = '') {
        $this->id = $id;
        $this->title = $title;
        $this->description = $description;
    }
}
?>
