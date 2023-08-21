var navigate = {

	showPage : function(path, targetDiv) {
		var jqxhr = jQuery.post(path, function(data) {
			jQuery("#" + targetDiv).html(data);
		});
	},
	showHomePage : function() {
		var path = "/carbookings/index.html";
		navigate.showPage(path, "name");
	},  
	showBookingPage : function() {
		var path = "/carbookings/html/cabbooking.html";
		navigate.showPage(path, "replaceDiv");
	},
	showCustomerlistPage : function() {
		var path = "/carbookings/html/customerlist.html";
		navigate.showPage(path, "replaceDiv");
	},
	
	showHomePage1 : function() {
		var path = "/carbookings/html/Home1.html";
		navigate.showPage(path, "replaceDiv");
	},   
	showContactPage : function() {
		var path = "/carbookings/html/contact.html";
		navigate.showPage(path, "replaceDiv");
	},
	
	showServicePage : function() {
		var path = "/carbookings/html/service.html";
		navigate.showPage(path, "replaceDiv");
	},
	showLoginPage : function(){
		var path = "/carbookings/html/login.html";
		navigate.showPage(path, "replaceDiv");
	},
	showRegisterPage : function() {
		var path = "/carbookings/html/register.html";
		navigate.showPage(path, "replaceDiv");
	},
	
	
	showAboutPage : function() {
		var path = "/carbookings/html/about.html";
		navigate.showPage(path, "replaceDiv");
	},
	
	showGalleryPage : function() {
		var path = "/carbookings/html/gallery.html";
		navigate.showPage(path, "replaceDiv");
	},
	showDriverLoginPage : function() {
		var path = "/carbookings/html/driver.html";
		navigate.showPage(path, "name");
	},
	showCustomerLoginPage : function() {
		var path = "/carbookings/html/customer.html";
		navigate.showPage(path, "name");
	},
	
	showAdminLoginPage : function() {
		var path = "/carbookings/html/admin.html";
		navigate.showPage(path, "name");
	},
	
	showAboutPage : function() {
		var path = "/carbookings/html/about.html";
		navigate.showPage(path, "replaceDiv");
	},
	
	showGalleryPage : function() {
		var path = "/carbookings/html/gallery.html";
		navigate.showPage(path, "replaceDiv");
	},
	setSessionValue : function(key, value) {
		sessionStorage.setItem(key, value);
	},

	getSessionValue : function(key) {
		return sessionStorage.getItem(key);
	},
	
	removeSessionValue : function(key) {
		sessionStorage.removeItem(key);
	},

	showError : function(errorMessage) {
		var message = "<div class=\"alert alert-danger\"><strong>Error: </strong>"
				+ errorMessage + "</div>";
		jQuery("#errorDiv").html(message);
	},

	logout : function() {
		
		var email = navigate.getSessionValue("email") || "";
		navigate.setSessionValue("email", null);
		navigate.setSessionValue("password", null);
		var data = {
			email : email
		};  
		navigate.post('/carbookings/login/logout', data);
		navigate.showHomePage();
	},
   
	post : function(url, data) {
		var responseData = null;

		jQuery.ajax({
			url : url,
			type : 'post',
			data : JSON.stringify(data), // Stringified Json Object
			dataType : 'json',
			async : false, // Cross-domain requests and dataType: "jsonp"
			// requests do not support synchronous operation
			cache : false, // This will force requested pages not to be cached
			// by the browser
			processData : false, // To avoid making query String instead of
			// JSON
			contentType : "application/json; charset=utf-8",
			success : function(data) {
				responseData = data;
			}
		});

		return responseData;
	},

	isUserLoggedIn : function() {
		/*console.log("userrrrr:"+navigate.getSessionValue("userName"));
		console.log("contextttttt:"+navigate.getSessionValue("context"));*/
		var email = navigate.getSessionValue("email") || "";
		var password = navigate.getSessionValue("password") || "";
		var type = navigate.getSessionValue("type") || "";

		var login = {
			email : email,
			password : password,
			type : type
			
		};

		return navigate.post('/carbookings/login/loggedin', login) || false;
	}
	
};
