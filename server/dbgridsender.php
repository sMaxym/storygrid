<?php
require_once "dbcontroller.php";

session_start();

gridInsert($_POST['canvas'], $_POST['name'], $_POST['entities'], $_POST['conns'], $_SESSION['id']);
echo "hello";

function gridInsert($canvas, $name, $entity, $conns, $id){
    global $mysqli;
    dbConnect();
    $mysqli->query("INSERT INTO `grids`(`user_id`, `name`, `canvas`, `entities`, `conns`) VALUES ('$id', 
                                                                                                  '$name', 
                                                                                                  '$canvas',
                                                                                                  '$entity',
                                                                                                  '$conns')");
    dbClose();
}