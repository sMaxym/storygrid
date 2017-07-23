<?php

$mysqli = false;

function dbConnect(){
    global $mysqli;
    $mysqli = new mysqli("localhost", "root", "", "dbStorygrid");
    $mysqli->query("SET NAMES 'utf-8'");
}

function dbClose(){
    global $mysqli;
    $mysqli->close();
}