<?php
$entityBody = file_get_contents('php://input');
// parse the referer from the json in $entityBody
$referer = json_decode($entityBody, true)['referer'];

// get some anonymous information about the request like user agent, etc.
$userAgent = $_SERVER['HTTP_USER_AGENT'];
$hostname = $_SERVER['HTTP_HOST'];
// add the time of the request
$timestamp = date('Y-m-d H:i:s');

// create a json string with all the information
$trackingData = json_encode(array(
    'timestamp' => $timestamp,
    'userAgent' => $userAgent,
    'referer' => $referer,
));

// create a filename based on the hostname that is either ebg-stage.pirsh.de or www.stimme-fuer-kinder.de
$filename = $hostname === 'ebg-stage.pirsh.de' ? 'ebg-stage' : 'ebg-prod';

$file = "../ebg-tracking/${filename}.txt";
file_put_contents($file, $trackingData . PHP_EOL, FILE_APPEND | LOCK_EX);
