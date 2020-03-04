<?php
class DbManager {

	// Database configuration
	private $dbhost = '172.21.0.3';
	private $dbport = '27017';
	private $dbuser = 'root';
	private $dbpass = 'mdpitinet2';
	private $conn;

	function __construct(){
		//Connecting to MongoDB
		try {
			//Establish database connection
			$this->conn = new MongoDB\Driver\Manager('mongodb://'.$this->dbuser.':'.$this->dbpass.'@'.$this->dbhost.':'.$this->dbport);
		}catch (MongoDBDriverExceptionException $e) {
			echo $e->getMessage();
			echo nl2br("n");
		}
	}

	function getConnection() {
		return $this->conn;
	}

}
?>
