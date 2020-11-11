<?php

if (isset($_GET) && count($_GET) > 0) {
    echo 'You submitted ' . $_GET["name"] . ', ' . $_GET["email"];
} elseif (isset($_POST) && count($_POST) > 0) {
    echo 'You submitted ' . $_POST["name"] . ', ' . $_POST["email"];
}

?>