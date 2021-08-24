<?php
$file = 'log.txt';
file_put_contents($file, 'Content', FILE_APPEND | LOCK_EX);
?>
