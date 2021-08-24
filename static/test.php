<?php
$entityBody = file_get_contents('php://input');
$file = 'log.txt';
file_put_contents($file, $entityBody, FILE_APPEND | LOCK_EX);
?>
