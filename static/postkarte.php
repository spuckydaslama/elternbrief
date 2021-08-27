<?php
$entityBody = file_get_contents('php://input');
$file = 'postkarten.txt';
file_put_contents($file, $entityBody . PHP_EOL, FILE_APPEND | LOCK_EX);
?>
