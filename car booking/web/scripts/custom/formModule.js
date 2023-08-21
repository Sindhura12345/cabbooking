
var formModule = angular.module('formModule', [])
.controller('FormController', [ '$http', '$scope', function($http, $scope) {
		var self = this;
		$scope.login = function(user) {
			 $("#glyphiconid").show();
			
	        $http.post('/carbooking/login/login',user).then(function(response) {  
				$scope.data = response.data;
				if($scope.data.successful) {
					navigate.setSessionValue("email", $scope.data.responseObject.email.replace(/\s+/g, ''));
					navigate.setSessionValue("password", $scope.data.responseObject.password);
					navigate.setSessionValue("type", $scope.data.responseObject.type);
					// $("#glyphiconid").hide();  
					console.log(navigate.getSessionValue("type"));
					if(navigate.getSessionValue("type")=="Customer")
						{
//						 showMainPage();
						showCustomerLoginPage();
						}
					else if(navigate.getSessionValue("type")=="Admin"){           
						navigate.showAdminLoginPage();
						
					}
					else if(navigate.getSessionValue("type")=="Driver"){           
						navigate.showDriverLoginPage();
						
					}
					else{
						showHomePage();
					}
				} else {
					$("#glyphiconid").hide();
					/*alert($scope.data.errorMessage);
					showError($scope.data.errorMessage);
					var message = "<div class=\"alert alert-danger\"><strong>Error: </strong>"+ $scope.data.errorMessage + "</div>";
					jQuery("#errorDiv").html(message);*/
					$("#errorDiv").show();
					$("#errorDiv").html("<b style='margin-left: 28%;font-size: medium;'>Note:</b> Invalid login credentials");
					console.log("Error while validating user");
				}
			}, function(errResponse) {
				console.error('Error while fetching notes');
			});
	    };
	    $scope.forgotPassword = function(email)
		{
			if(email != null)   
			{
				jQuery("#spinner").addClass("glyphicon glyphicon-refresh glyphicon-refresh-animate");
				$http.post('/carbooking/register1/forgot', email).then(function(response) 
				{  
					$scope.data = response.data;
					if($scope.data.successful) 
					{
						jQuery("#spinner").removeClass("glyphicon glyphicon-refresh glyphicon-refresh-animate");
						alert("A mail has been sent!");
						
						navigate.showHomePage1();
					}
					else 
					{
						jQuery("#spinner").removeClass("glyphicon glyphicon-refresh glyphicon-refresh-animate");
						alert($scope.data.errorMessage);
					}
				},
				function(errResponse) 
				{
					console.error('Error while fetching notes');
				});
			}
			else
			{
				alert("Please enter email-Id");
			}
	    };
	
   } 

]);