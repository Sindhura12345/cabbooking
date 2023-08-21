package com.spring.Service;

import java.util.List;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.andromeda.commons.model.Response;
import com.spring.DAO.RegisterDao;
import com.spring.Model.Register;

@Service
public class RegisterService {
	
	Response response = new Response();

	@Autowired
	private RegisterDao registerDAO;
	
	public Response add(Register register) {
		response.setSuccessful(false);
		registerDAO.add(register);
		response.setSuccessful(true);
		response.setResponseObject(register);
		return response;
	}


	public Response viewaccounts() {
		response.setSuccessful(false);
		List<Register> RegisterDetails = registerDAO.viewaccounts();
		response.setSuccessful(true);
		response.setResponseObject(RegisterDetails);
		return response;
	}
	
	public Response getDetails(String username)
	{
		response.setSuccessful(false);
		Register singleuserdetails = registerDAO.getDetails(username);
		response.setSuccessful(true);
		response.setResponseObject(singleuserdetails);
		return response;
	}
	
	public Response updateDetails(Register register)
	{
		response.setSuccessful(false);
		registerDAO.updateDetails(register);
		response.setSuccessful(true);
		response.setResponseObject(register);
		return response;
	}
	
	public Response removeDetails(String username)
	{
		response.setSuccessful(false);
		registerDAO.removeDetails(username);
		response.setSuccessful(true);
		response.setResponseObject(username);
		return response;
	}

	public Response login(Register register) {
		response.setSuccessful(false);
		boolean result = registerDAO.login(register);
		System.out.println("++++++++++++++++++++++++++++++++++++++");
		System.out.println(result);
		System.out.println("_______________________________________");
		if (result) {
			response.setSuccessful(true);
			Register data = registerDAO.getUserDetails(register);
			
			response.setResponseObject(data);
		
		} else {
			response.setErrorMessage("Invalid credentials");
		}

		return response;
	}
 	
}
