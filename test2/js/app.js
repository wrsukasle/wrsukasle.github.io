angular.module('user_management', ['ui.bootstrap'])

.controller('main', ['$scope','$http','$log', function($scope, $http, $log){

	$scope.edit_form_control = false; //hide edit form
	$scope.edit_form_enabled = true; //controls if form elements to be disabled
	$scope.form_message = false; //success or fail should be hidden before
	$scope.form_overlay = false;
	$scope.add_form_visible = false;
	$scope.user_list_visible = true;	
	/**
	 * Number of users to be displayed in per page
	 * @type {String}
	 */
		$scope.rows_per_page = '10';


	$http({
		'method': 'get',
		'url': 'js/users.json'
	}).then(function(response){
		$scope.users = response.data;
		init_pagination();
	}, function(response){
		alert(response);
	})
	
	$scope.edit_user = function (user) {
		$scope.user = user;
		$scope.edit_form_visible = true;
		$scope.form_message = false;
		$scope.page_title = "Edit User: " + user.first_name;
		$scope.user_list_visible = false;
	}

	$scope.cancel_edit = function(){
		$scope.edit_form_visible = false;
		$scope.add_form_visible = false;
		$scope.user_list_visible = true;
	}

	$scope.save_edit_form = function()
	{
		$scope.user.action = "edit_user";
		$scope.edit_form_enabled = false;

		$http({
			method: 'POST',
			url: 'server.php',
			data: $scope.user
		}).then(function successCallback(response) {
			
			$scope.form_message = true;
			$scope.edit_form_enabled = true;

			if (response.data.status == 'success') {
				$scope.success_msg = "User data edited successfully.";
				$scope.edit_class = 'success';
				$scope.edit_form_visible = false;
			}
			if (response.data.status == 'fail') {
				$scope.success_msg = "User data failed to edit.";
				$scope.edit_class = 'danger';
			}
		}, function errorCallback(response) {

		});
	}

	$scope.delete_user = function(user){

	 	var is_continue = confirm("Are you sure you want to delete user: " + user.first_name);

	 	if (!is_continue) {
	 		return false;
	 	}

		user.action = "delete_user";
		$scope.form_message = false;
		$scope.form_overlay = true;

		$http({
			method: 'POST',
			url: 'server.php',
			data: user
		}).then(function successCallback(response) {
			
			$scope.form_message = true;
			$scope.form_overlay = false;

			if (response.data.status == 'success') {
				$scope.success_msg = "User data deleted successfully.";
				$scope.edit_class = 'success';
			}
			if (response.data.status == 'fail') {
				$scope.success_msg = "User data failed to delete.";
				$scope.edit_class = 'danger';
			}

			final_list = [];

			angular.forEach($scope.users, function(value, id){
				if (value.id != user.id) {
					final_list.push(value);
				}
			});
			
			if (response.data.status == 'success') {
				$scope.users=final_list;
			}

		}, function errorCallback(response) {

		});
	}		

	$scope.add_user = function(){
		$scope.user = {};
		$scope.form_message = false;
		$scope.page_title = "Add User";
		$scope.add_form_visible = true;
		$scope.edit_form_visible = false;
		$scope.user_list_visible = false;
	}

	$scope.add_user_form = function(){
		$scope.user.action = "add_user";
		$scope.edit_form_enabled = false;
		$scope.form_message = false;

		$http({
			method: 'POST',
			url: 'server.php',
			data: $scope.user
		}).then(function successCallback(response) {
			
			$scope.form_message = true;
			$scope.edit_form_enabled = true;

			if (response.data.status == 'success') {
				$scope.success_msg = "User <strong>" + $scope.user.first_name + "</strong> added successfully.";
				$scope.edit_class = 'success';
				$scope.add_form_visible = false;
				$scope.users.push($scope.user);				
			}
			if (response.data.status == 'fail') {
				$scope.success_msg = "User could not be added.";
				$scope.edit_class = 'danger';
			}
		}, function errorCallback(response) {

		});
		
	}

	function init_pagination()
	{
		$scope.max_page_links = 5;
		$scope.total_items = get_count($scope.users);
		$scope.current_page = 1;
		$scope.items_per_page = $scope.rows_per_page;
		$scope.skip_pages = 0;
		$scope.number_of_pages = Math.ceil($scope.total_items / $scope.items_per_page);
		$scope.row_no = $scope.items_per_page * ($scope.current_page - 1);
		$scope.order_by_column = "id";
	}

	function get_count(obj){	
		return Object.keys(obj).length;
	}

	$scope.update_limit = function (){
		init_pagination();
	}

	$scope.pageChanged = function() {
		$scope.skip_pages = $scope.items_per_page * ($scope.current_page - 1);
		$scope.row_no = $scope.items_per_page * ($scope.current_page - 1);
	};

}]);