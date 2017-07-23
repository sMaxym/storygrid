<?php

require_once "dbcontroller.php";

$userEmail = htmlspecialchars($_POST['email']);
$userPassword = htmlspecialchars($_POST['password']);

function addUser($email, $password){
    global $mysqli;
    dbConnect();
    $mysqli->query("INSERT INTO `users`(`email`, `password`) VALUES (".$email.", ".$password.")");
    dbClose();
}

function getUser($limit){
    global $mysqli;
    dbConnect();
    $data = $mysqli->query("SELECT * FROM `users` ORDER BY `id` DESC LIMIT $limit");
    dbClose();

    return data2array($data);
}

function data2array($data){
    $dataArray = [];
    while(($row = $data->fetch_assoc()) != false){
        $dataArray[] = $row;
    }

    return $dataArray;
}