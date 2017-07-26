<?php

require_once "dbgridsender.php";

switch(htmlspecialchars($_GET['action'])){
    case 1:
        echo json_encode(getGridNames(htmlspecialchars($_GET['id'])));
        break;
    case 2:
        echo json_encode(getGrid(htmlspecialchars($_GET['id'])));
        break;
}