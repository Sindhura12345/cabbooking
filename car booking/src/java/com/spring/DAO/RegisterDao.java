package com.spring.DAO;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.spring.DAO.BaseDao;
import com.spring.Model.Register;


@Repository
public class RegisterDao extends BaseDao  {
	
	
	
	public void add(Register register) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("T", register);
		SqlSession sqlSession = sqlSessionFactory.openSession();
		sqlSession.insert("ApplicationRegister.InsertData", params);
		sqlSession.close();
	}

	public List<Register> viewaccounts() {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		List<Register> RegisterDetails=sqlSession.selectList("ApplicationRegister.viewaccounts");
		sqlSession.close();
		return RegisterDetails;
	}

	public Register getDetails(String username)
	{
		SqlSession sqlSession = sqlSessionFactory.openSession();
		Register singleuserdetails=sqlSession.selectOne("ApplicationRegister.getDetails",username);
		sqlSession.close();
		return singleuserdetails;
		
	}
	
	public void updateDetails(Register register)
	{
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("T", register);
		SqlSession sqlSession = sqlSessionFactory.openSession();
		sqlSession.update("ApplicationRegister.updateDetails",params);
		sqlSession.close();
	}
	
	public void removeDetails(String username)
	{
		SqlSession sqlSession = sqlSessionFactory.openSession();
		sqlSession.delete("ApplicationRegister.removeDetails",username);
		sqlSession.close();
	}
	
	public Boolean login(Register register)
	{
		
		  Boolean status = Boolean.valueOf(false);
		  Map<String, Object> map = new HashMap();
		    map.put("p", register);
		    Integer RegisteredData = 0;
		    RegisteredData = (Integer)this.sqlSessionTemplate.selectOne("ApplicationRegister.CheckRegistertaion", map);
		    System.out.println("((((((((((((((((((((((((((((((((((((((((((");
		    System.out.println(RegisteredData);
		    
		    System.out.println("))))))))))))))))))))))))))))))))))))))))))");
		    
		  if (RegisteredData!=0) {
		    	
		    	   status = Boolean.valueOf(true);
		
		  }
		  else {
			   status = Boolean.valueOf(false);}
		  
		  return status;
		  }

	
	public Register getUserDetails(Register register)
	{
		SqlSession sqlSession = sqlSessionFactory.openSession();
		Register singleuserdetails=sqlSession.selectOne("ApplicationRegister.getUserDetails",register);
		sqlSession.close();
		return singleuserdetails;
		
	}
	
}
