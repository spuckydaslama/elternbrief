<?php
$file = 'log.txt';
file_put_contents($file, var_dump($_POST), FILE_APPEND | LOCK_EX);
?>
