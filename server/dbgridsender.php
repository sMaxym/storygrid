<?php
require_once "dbcontroller.php";
require_once "registration.php";

session_start();

gridInsert($_POST['canvas'], $_POST['name'], $_POST['entities'], $_POST['conns'], $_SESSION['id']);

function gridInsert($canvas, $name, $entity, $conns, $id){
    global $mysqli;
    dbConnect();
    $mysqli->query("INSERT INTO `grids`(`userId`, `name`, `canvas`, `entities`, `conns`) VALUES ('$id', 
                                                                                                  '$name', 
                                                                                                  '$canvas',
                                                                                                  '$entity',
                                                                                                  '$conns')");
    dbClose();
}

function getGridNames($userId){
    global $mysqli;
    dbConnect();
    $grids = $mysqli->query("SELECT grids.id, grids.name FROM grids WHERE grids.userId = '$userId' ORDER BY grids.id");
    dbClose();

    return data2array($grids);
}

function getGrid($id){
    global $mysqli;
    dbConnect();
    $grids = $mysqli->query("SELECT * FROM `grids` WHERE `id` = '$id'");
    dbClose();

    return data2array($grids);
}