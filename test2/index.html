<!DOCTYPE html>
<html ng-app="user_management">
	<head>
		<title>Assignment 2</title>
		<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="css/app.css">
	</head>
	<body ng-controller="main">
		<div class="container">
			<div class="row">&nbsp;</div>

			<div class="alert alert-{{edit_class}} alert-dismissible" role="alert" ng-model="success_msg" ng-show="form_message">
				<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				{{success_msg}}
			</div>

			<!-- Edit form -->
			<div class="row" ng-show="edit_form_visible">
				<div class="overlay" ng-show="!edit_form_enabled"><div class="text">Please wait...</div></div>
				<h2>{{page_title}}</h2>
				<form class="form-horizontal">
					<div class="form-group">
						<label for="first_name" class="col-sm-2 control-label">First Name: </label>
						<div class="col-sm-5">
							<input type="text" ng-disabled="!edit_form_enabled" ng-model="user.first_name" class="form-control" placeholder="First Name">
						</div>
					</div>

					<div class="form-group">
						<label for="last_name" class="col-sm-2 control-label">Last Name</label>
						<div class="col-sm-5">
							<input type="text" ng-disabled="!edit_form_enabled" ng-model="user.last_name" class="form-control" placeholder="Last Name">
						</div>
					</div>

					<div class="form-group">
						<label for="gender" class="col-sm-2 control-label">Gender</label>
						<dir class="col-sm-2">
							<select ng-disabled="!edit_form_enabled" class="form-control" ng-model="user.gender">
								<option value="">-- Select Gender --</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
						</dir>
					</div>

					<div class="form-group">
						<label for="address" class="col-sm-2 control-label">Address</label>
						<div class="col-sm-5">
							<textarea ng-disabled="!edit_form_enabled" class="form-control" ng-model="user.address" rows="3"></textarea>
						</div>
					</div>

					<div class="form-group">
						<label for="dob" class="col-sm-2 control-label">Date of Birth</label>
						<div class="col-sm-5">
							<input ng-disabled="!edit_form_enabled" type="text" ng-model='user.dob' class="form-control" placeholder="yyyy-mm-dd">
						</div>
					</div>

					<div class="form-group">
						<div class="col-sm-offset-5 col-sm-10">
							<button ng-click="save_edit_form()" class="btn btn-primary">Save</button>
							<a ng-click="cancel_edit()" class="btn btn-danger">Cancel</a>
						</div>
					</div>
					<input type="hidden" ng-model="form_type" value="{{form_type}}" />
				</form>
			</div>

			<!-- Add User form -->
			<div class="row" ng-show="add_form_visible">
				<div class="overlay" ng-show="!edit_form_enabled"><div class="text">Please wait...</div></div>
				<h2>{{page_title}}</h2>
				<form class="form-horizontal">
					<div class="form-group">
						<label for="first_name" class="col-sm-2 control-label">First Name: </label>
						<div class="col-sm-5">
							<input type="text" required ng-disabled="!edit_form_enabled" ng-model="user.first_name" class="form-control" placeholder="First Name">
						</div>
					</div>

					<div class="form-group">
						<label for="last_name" class="col-sm-2 control-label">Last Name</label>
						<div class="col-sm-5">
							<input type="text" required ng-disabled="!edit_form_enabled" ng-model="user.last_name" class="form-control" placeholder="Last Name">
						</div>
					</div>

					<div class="form-group">
						<label for="gender" class="col-sm-2 control-label">Gender</label>
						<dir class="col-sm-2">
							<select required ng-disabled="!edit_form_enabled" class="form-control" ng-model="user.gender">
								<option value="">-- Select Gender --</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
						</dir>
					</div>

					<div class="form-group">
						<label for="address" class="col-sm-2 control-label">Address</label>
						<div class="col-sm-5">
							<textarea  required  ng-disabled="!edit_form_enabled" class="form-control" ng-model="user.address" rows="3"></textarea>
						</div>
					</div>

					<div class="form-group">
						<label for="dob" class="col-sm-2 control-label">Date of Birth</label>
						<div class="col-sm-5">
							<input required ng-disabled="!edit_form_enabled" type="text" ng-model='user.dob' class="form-control" placeholder="yyyy-mm-dd">
						</div>
					</div>

					<div class="form-group">
						<div class="col-sm-offset-5 col-sm-10">
							<button ng-click="add_user_form()" class="btn btn-primary">Add User</button>
							<a ng-click="cancel_edit()" class="btn btn-danger">Cancel</a>
						</div>
					</div>
					<input type="hidden" ng-model="form_type" value="{{form_type}}" />
				</form>
			</div>

			<!-- User List form -->
			<div class="row" ng-show="user_list_visible">
				<div class="overlay" ng-show="form_overlay"><div class="text">Please wait...</div></div>
				<div class="row">
					<div class="col-lg-12">
						<a ng-click="add_user()" class="btn btn-success">
							<i class="fa fa-plus" aria-hidden="true"></i></i> Add Person
						</a>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12">&nbsp;</div>
				</div>
				<div class="row">
					<div class="col-lg-1">&nbsp;</div>
					<div class="col-lg-1">
						<label for="rows_per_page" class="col-sm-2 control-label">Show</label>						
					</div>
					<div class="col-lg-1">
						<select class="form-control" id="rows_per_page" ng-model="rows_per_page" ng-change="update_limit()">							
							<option value="2">2</option>
							<option value="4">4</option>
							<option value="8">8</option>
							<option value="10">10</option>
							<option value="15">15</option>
							<option value="20">20</option>
						</select>
					</div>
					<div class="col-lg-2">&nbsp;</div>
					<div class="col-lg-3">&nbsp;</div>
					<div class="col-lg-1">
						<label for="form_search" class="col-sm-2 control-label">Search: </label>
					</div>
					<div class="col-lg-3">
						<input type="text" id="form_search" ng-model="form_search" class="form-control" ng-change="update_pager()">
					</div>
				</div>
				<div class="row" ng-show="number_of_pages > 1 && filtered_user.length > 0">
					<div class="col-lg-offset-8">
						<ul uib-pagination
							total-items="total_items"
							ng-model="current_page"
							max-size="max_page_links"
							class="pagination-sm"
							boundary-links="true"
							items-per-page="items_per_page"
							ng-change="pageChanged()"
						></ul>
					</div>
				</div>				
				<div class="row">
					<div class="col-lg-12">
						<table class="table table-striped">
							<thead>
								<tr>
									<th>
										<a href="javascript:void(0)" title="Ascending" ng-click="order_by_column='id'"><i class="fa fa-arrow-circle-up" aria-hidden="true"></i></a>
										#
										<a href="javascript:void(0)" title="Descending" ng-click="order_by_column='-id'"><i class="fa fa-arrow-circle-down" aria-hidden="true"></i></a>
									</th>
									<th>
										<a href="javascript:void(0)" title="Ascending" ng-click="order_by_column='first_name'"><i class="fa fa-arrow-circle-up" aria-hidden="true"></i></a>
										First Name
										<a href="javascript:void(0)" title="Descending" ng-click="order_by_column='-first_name'"><i class="fa fa-arrow-circle-down" aria-hidden="true"></i></a>
									</th>
									<th>
										<a href="javascript:void(0)" title="Ascending" ng-click="order_by_column='last_name'"><i class="fa fa-arrow-circle-up" aria-hidden="true"></i></a>
										Last Name
										<a href="javascript:void(0)" title="Descending" ng-click="order_by_column='-last_name'"><i class="fa fa-arrow-circle-down" aria-hidden="true"></i></a>
										</th>
									<th>
										<a href="javascript:void(0)" title="Ascending" ng-click="order_by_column='gender'"><i class="fa fa-arrow-circle-up" aria-hidden="true"></i></a>
										Gender
										<a href="javascript:void(0)" title="Descending" ng-click="order_by_column='-gender'"><i class="fa fa-arrow-circle-down" aria-hidden="true"></i></a>
										</th>
									<th>
										<a href="javascript:void(0)" title="Ascending" ng-click="order_by_column='address'"><i class="fa fa-arrow-circle-up" aria-hidden="true"></i></a>
										Addres
										<a href="javascript:void(0)" title="Descending" ng-click="order_by_column='-address'"><i class="fa fa-arrow-circle-down" aria-hidden="true"></i></a>
										</th>
									<th>
										<a href="javascript:void(0)" title="Ascending" ng-click="order_by_column='dob'"><i class="fa fa-arrow-circle-up" aria-hidden="true"></i></a>
										Date of Birth
										<a href="javascript:void(0)" title="Descending" ng-click="order_by_column='-dob'"><i class="fa fa-arrow-circle-down" aria-hidden="true"></i></a>
									</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								<tr ng-repeat="user in (filtered_user = (users | filter:form_search)) | limitTo : rows_per_page:skip_pages | orderBy: order_by_column">
									<td>{{row_no + $index + 1}}</td>
									<td>{{user.first_name}}</td>
									<td>{{user.last_name}}</td>
									<td>{{user.gender}}</td>
									<td>{{user.address}}</td>
									<td>{{user.dob}}</td>
									<td>
										<a ng-click="edit_user(user)" class="btn btn-primary">
											<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
										</a> | 
										<a  ng-click="delete_user(user)" class="btn btn-danger">
											<i class="fa fa-trash-o" aria-hidden="true"></i></i> Delete</a>
									</td>
								</tr>
							</tbody>
							<tfooter>
								<tr>
									<th>
										<a href="javascript:void(0)" title="Ascending" ng-click="order_by_column='id'"><i class="fa fa-arrow-circle-up" aria-hidden="true"></i></a>
										#
										<a href="javascript:void(0)" title="Descending" ng-click="order_by_column='-id'"><i class="fa fa-arrow-circle-down" aria-hidden="true"></i></a>
									</th>
									<th>
										<a href="javascript:void(0)" title="Ascending" ng-click="order_by_column='first_name'"><i class="fa fa-arrow-circle-up" aria-hidden="true"></i></a>
										First Name
										<a href="javascript:void(0)" title="Descending" ng-click="order_by_column='-first_name'"><i class="fa fa-arrow-circle-down" aria-hidden="true"></i></a>
									</th>
									<th>
										<a href="javascript:void(0)" title="Ascending" ng-click="order_by_column='last_name'"><i class="fa fa-arrow-circle-up" aria-hidden="true"></i></a>
										Last Name
										<a href="javascript:void(0)" title="Descending" ng-click="order_by_column='-last_name'"><i class="fa fa-arrow-circle-down" aria-hidden="true"></i></a>
										</th>
									<th>
										<a href="javascript:void(0)" title="Ascending" ng-click="order_by_column='gender'"><i class="fa fa-arrow-circle-up" aria-hidden="true"></i></a>
										Gender
										<a href="javascript:void(0)" title="Descending" ng-click="order_by_column='-gender'"><i class="fa fa-arrow-circle-down" aria-hidden="true"></i></a>
										</th>
									<th>
										<a href="javascript:void(0)" title="Ascending" ng-click="order_by_column='address'"><i class="fa fa-arrow-circle-up" aria-hidden="true"></i></a>
										Addres
										<a href="javascript:void(0)" title="Descending" ng-click="order_by_column='-address'"><i class="fa fa-arrow-circle-down" aria-hidden="true"></i></a>
										</th>
									<th>
										<a href="javascript:void(0)" title="Ascending" ng-click="order_by_column='dob'"><i class="fa fa-arrow-circle-up" aria-hidden="true"></i></a>
										Date of Birth
										<a href="javascript:void(0)" title="Descending" ng-click="order_by_column='-dob'"><i class="fa fa-arrow-circle-down" aria-hidden="true"></i></a>
									</th>
									<th>Action</th>
								</tr>
							</tfooter>				
						</table>

					</div>
					<div class="row" ng-show="number_of_pages > 1 && filtered_user.length > 0">
						<div class="col-lg-offset-8">
							<ul uib-pagination
								total-items="total_items"
								ng-model="current_page"
								max-size="max_page_links"
								class="pagination-sm"
								boundary-links="true"
								items-per-page="items_per_page"
								ng-change="pageChanged()"
							></ul>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-12">&nbsp;</div>
					</div>
				</div>
			</div>
		</div>
		<script type="text/javascript" src="js/angular.min.js"></script>
		<script type="text/javascript" src="js/angular-animate.min.js"></script>
		<script type="text/javascript" src="js/jquery.min.js"></script>		
		<script type="text/javascript" src="js/bootstrap.min.js"></script>
		<script type="text/javascript" src="js/ui-bootstrap-tpls-2.5.0.js"></script>		
		<script type="text/javascript" src="js/app.js"></script>
	</body>
</html>