<?php

require_once "dbcontroller.php";

$userEmail = htmlspecialchars($_POST['email']);
$userPassword = htmlspecialchars($_POST['password']);

$action = htmlspecialchars($_POST['action']);

switch ($action){
    case 1:
        addUser($userEmail, $userPassword);
        break;
    case 2:
        echo getUserByData($userEmail, $userPassword, 0);
        break;
}

function getUserByData($email, $password, $limit){
    $users = getUser($limit);

    for ($i = 0; $i < count($users); $i++){
        if($users[$i]["email"] == $email && $users[$i]["password"] == $password){
            return $users[$i]["id"];
        }
    }
    return "-1";
}

function addUser($email, $password){
    global $mysqli;
    dbConnect();
    $mysqli->query("INSERT INTO `users`(`email`, `password`) VALUES ('$email', '$password')");
    dbClose();
}

function getUser($limit){
    global $mysqli;

    $limitQuery = '';
    if($limit != 0){
        $limitQuery = "DESC LIMIT $limit";
    }


    dbConnect();
    $data = $mysqli->query("SELECT * FROM `users` ORDER BY `id` $limitQuery");
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