<?php
$entityBody = file_get_contents('php://input');

$hostname = $_SERVER['HTTP_HOST'];
$filename = $hostname === 'ebg-stage.pirsh.de' ? 'ebg-stage-postkarten' : 'ebg-prod-portkarten';
$file = '../ebg-postkarten/${filename}.txt';
file_put_contents($file, $entityBody . PHP_EOL, FILE_APPEND | LOCK_EX);
