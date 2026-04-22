<?php
class greet {
    public $name;
    public $age;
    public $grade;

    public function __construct($name, $age, $grade){
        $this->name = $name;
        $this->age = $age;
        $this->grade = $grade;
    }

    public function display(): string {
        return "my name is " . $this->name . " " . $this->age . " " . $this->grade . " ";
    }
}

$name = "alpha";
$age = 20;
$grade = 9;

$student = new greet($name, $age, $grade);

echo $student->display();