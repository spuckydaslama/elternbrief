<?php
// get some anonymous information about the request like user agent, etc.
$userAgent = $_SERVER['HTTP_USER_AGENT'];
$referer = $_SERVER['HTTP_REFERER'];
$hostname = $_SERVER['HTTP_HOST'];

// create a json string with all the information
$entityBody = json_encode(array(
    'userAgent' => $userAgent,
    'referer' => $referer,
    'hostname' => $hostname
));

$file = "../ebg-tracking/text.txt";
file_put_contents($file, $entityBody . PHP_EOL, FILE_APPEND | LOCK_EX);
?>