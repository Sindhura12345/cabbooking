package com.spring.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.andromeda.commons.model.Response;

import com.spring.Model.Register;
import com.spring.Service.RegisterService;


@RestController
@RequestMapping("/register")
public class Registration {
	
	Response response = new Response();

	@Autowired
	private RegisterService registerService;
	
	@ResponseBody
	@RequestMapping(value = "add", method = { RequestMethod.POST })
	public Response add(@RequestBody Register register)
	{
		return registerService.add(register);
	}
	

	@ResponseBody
	@RequestMapping(value = "viewaccounts", method = { RequestMethod.POST })
	public Response viewaccounts()
	{
		return registerService.viewaccounts();
	}
	
	@ResponseBody
	@RequestMapping(value = "getDetails", method = { RequestMethod.POST })
	public Response getDetails(@RequestBody String username)
	{
		return registerService.getDetails(username);
	}
	
	@ResponseBody
	@RequestMapping(value = "updateDetails", method = { RequestMethod.POST })
	public Response updateDetails(@RequestBody Register register)
	{
		return registerService.updateDetails(register);
	}
	
	@ResponseBody
	@RequestMapping(value = "removeDetails", method = { RequestMethod.POST })
	public Response removeDetails(@RequestBody String username)
	{
		return registerService.removeDetails(username);
	}
	
	@ResponseBody
	@RequestMapping(value = "login", method = { RequestMethod.POST })
	public Response login(@RequestBody Register register)
	{
		return registerService.login(register);
	}


	
}
