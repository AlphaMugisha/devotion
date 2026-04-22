<?php
class car{
    public $color;
    public $brand;

    public function __contruct ($color, $brand){
        $this->color;
        $this->brand;
    }
    public function display(): string {
        return "my car is color ".$this->color. " " .$this->brand. " ";
    }
}
$color = "green";
$brand = "toyota rav4 2024 plug in hybrid";

$mycar = new car($color, $brand);

echo $mycar->display();
?>