<?php
	$data = file_get_contents("php://input");
	$data = json_decode($data);


	if (isset($data->action) && $data->action == 'edit_user') {
		unset($data->action);
		edit_user($data);
	}else if(isset($data->action) && $data->action == 'delete_user'){
		unset($data->action);
		delete_user($data);
	}else if(isset($data->action) && $data->action == 'add_user'){
		unset($data->action);
		add_user($data);
	}

	function edit_user($data)
	{
		sleep(2);
		//Read json data
		$file_data = file_get_contents('js/users.json');
		$file_data = json_decode($file_data);

		foreach ($file_data as &$user) {
			if ($user->id == $data->id) {
				$user = $data;
				break;
			}
		}

		file_put_contents('js/users.json', json_encode($file_data, JSON_PRETTY_PRINT));

		header("Content-Type: application/json");
		header("HTTP/1.1 200 OK");
		echo json_encode(array(
			'status' => 'success',
			'messege' => 'User edit successfully.',
			'data' => array(
				'id' => $data->id
			)
		));

		exit(0);
	}

	function delete_user($data)
	{
		sleep(1);
		//Read json data
		$file_data = file_get_contents('js/users.json');
		$file_data = json_decode($file_data);
		$deleted_user = null;

		$final_data = array();
		$_id = 0;
		foreach ($file_data as &$user) {
			if ($user->id == $data->id) {
				continue;
			}
			$user->id = ++$_id; //rebuid unique id
			$final_data[] = $user;
		}

		file_put_contents('js/users.json', json_encode($final_data, JSON_PRETTY_PRINT));

		header("Content-Type: application/json");
		header("HTTP/1.1 200 OK");
		echo json_encode(array(
			'status' => 'success',
			'messege' => 'User deleted successfully.',
			'data' => $deleted_user
		));

		exit(0);    	
	}

	function add_user($data)
	{
		sleep(2);
		//Read json data
		$file_data = file_get_contents('js/users.json');
		$file_data = json_decode($file_data);

		$data->id = (end($file_data)->id) + 1;

		$file_data[] = $data;

		file_put_contents('js/users.json', json_encode($file_data, JSON_PRETTY_PRINT));

		header("Content-Type: application/json");
		header("HTTP/1.1 200 OK");
		echo json_encode(array(
			'status' => 'success',
			'messege' => 'User added successfully.',
			'data' => array(
				'id' => $data->id
			)
		));

		exit(0);
	}

	//Default access is not allowed
	header("Content-Type: application/json");
	header("HTTP/1.1 500 Access denied!");
	echo json_encode(array(
		'status' => 'fail',
		'messege' => 'Access Denied',
		'data' => array()
	));
	exit(0);


?>