<?php

$collection = (new MongoDB\Client)->admin->collectiveProblemSolver;
// $collection->drop();

$deleteResult = $collection->deleteOne(['description' => 4]);

printf("Deleted %d document(s)\n", $deleteResult->getDeletedCount());

?>
