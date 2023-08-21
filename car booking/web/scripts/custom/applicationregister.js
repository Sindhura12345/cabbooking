var reg = angular.module('RegistrationModule', []);
reg.controller('RegistrationController', ['$http','$scope', function($http, $scope) {
	
	
		$scope.registration = function(Data) {
		console.log(Data);
		
		
		$http.post('/carbooking/register/add', Data).then(
				function(response) {
					
					
					$scope.data = response.data;
					
					console.log( $scope.data );
					if ($scope.data.successful) {
						alert(Data.username + "\'s Registration Done Successfully...!");
						window.location.reload();
					} else {
						alert(Data.username + "\'s Registration Failed...!");
					}
				}, function(errResponse) {
					alert("Account with User Name \'" + Data.username + "\' is Already Existed , Better Login Or Try Another User Name To Register...!");
					console.error('Error Occoured In Registration Process...!');
				}
				
		
		);
	};
	
	
	$http.post('/carbooking/register/viewaccounts').then(
			function(response) {
				
				
				$scope.data = response.data;
				
				console.log( $scope.data );
				if ($scope.data.successful) {
					$scope.userdetails = $scope.data.responseObject;
					console.log($scope.userdetails);
				} else {
					alert("Accounts Viewing Operation Failed...!");
				}
			}, function(errResponse) {
				console.error('Error Occoured In Accounts Viewing Process...!');
			}
			
	);
	
	$scope.getDetails = function(username) {
		console.log(username);
		
		
		$http.post('/carbooking/register/getDetails', username).then(
				function(response) {
					
					
					$scope.data = response.data;
					
					console.log( $scope.data );
					if ($scope.data.successful) {
						$scope.data={object:$scope.data.responseObject};
					} else {
						alert("Account Viewing Operation Failed...!");
					}
				}, function(errResponse) {
					console.error('Error Occoured In Account Viewing Process...!');
				}
				
		
		);
	};
	
	$scope.updateDetails = function(singleUserData){
		console.log(singleUserData.username);
		$http.post('/carbooking/register/updateDetails', singleUserData).then(
				function(response) {
					$scope.data = response.data;
					if ($scope.data.successful) {
						alert(singleUserData.username + "\'s Details Updated Successfully...!");
						window.location.reload();
					} else {
						alert(singleUserData.username + "\'s Details Updation Failed...!");
					}
				}, function(errResponse) {
					console.error('Error Occoured In Updation Process...!');
				});
	};
	
	$scope.removeDetails = function(email) {
		var flag=confirm("Do You Really Want To Remove " + email + "\'s Details...?");
		if(flag)
		{
			console.log(email);		
			$http.post('/carbooking/register/removeDetails', email).then(
					function(response) {
						$scope.data = response.data;
						if ($scope.data.successful) {
							alert(email + "\'s Details Removed Successfully...!");
							window.location.reload();
						} else {
							alert(email + "\'s Details not Deleted...!");
						}
					}, function(errResponse) {
						console.error('Error Occoured In Deletion Process...!');
					});	
		}
	};
	
	$scope.login = function(object) {
			console.log(object);
			$http.post('/carbooking/register/login', object).then(
					function(response) {
						$scope.data = response.data;
						
						if ($scope.data.successful) {
							alert("You Are Currently Logined As " + object.email + "...!");
							Andromeda.showAfterLoginPage();
						} else {
							alert("Incorrect User-Name Or Password...!");
						}
					}, function(errResponse) {
						console.error('Error Occoured In Login Process...!');
					});	
			};
	
}]);