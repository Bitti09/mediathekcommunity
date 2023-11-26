<?php
if(isset($request['1'])) {
	$event = trim($request['1']);
	 $txt = $event;
	 if($_REQUEST) {
	 foreach($_REQUEST as $key=>$value)
		{
		  $txt.= " | ". $key.':'.$value;
		}

	 }

	

	//$myfile = file_put_contents('vastlog.txt', $txt.PHP_EOL , FILE_APPEND | LOCK_EX);
}
?>
