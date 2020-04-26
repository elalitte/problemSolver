<?php

//required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// include database file
include_once 'db.php';

$dbname = 'admin';
$collection = 'collectiveProblemSolver';

//DB connection
$db = new DbManager();
$conn = $db->getConnection();

//record to delete
$data="";
$data = json_decode(file_get_contents("php://input"));

//_id field value
//$id = $data->{'$oid'};
$descr = $data->{'description'};

// TESTS

function write_log($log_msg)
{
	$log_filename = "logs";
	if (!file_exists($log_filename))
	{
		mkdir($log_filename, 0777, true);
	}
	$log_file_data = $log_filename.'/debug.log';
	file_put_contents($log_file_data, $log_msg . "\n", FILE_APPEND);
}

write_log("Writing Log");
write_log(print_r($data,1));
write_log(print_r($descr,1));
//

// delete record
$delete = new MongoDB\Driver\BulkWrite();
$delete->delete(
	['description' => $descr],
	['limit' => 1]
);

$result = $conn->executeBulkWrite("$dbname.$collection", $delete);

//print_r($result);

// verify
if ($result->getDeletedCount() == 1) {
	echo json_encode(
		array("message" => "Record successfully deleted")
	);
} else {
	echo json_encode(
		array("message" => "Error while deleting record")
	);
}

?>
