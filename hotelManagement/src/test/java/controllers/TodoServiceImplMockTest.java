//package controllers;
//
////Java Program to Illustrate TodoServiceImplMockTest File
//
//import static org.junit.Assert.assertEquals;
//import static org.mockito.Mockito.when;
//
////Importing required classes
//import java.util.Arrays;
//import java.util.List;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.mockito.Mock;
//import org.mockito.runners.MockitoJUnitRunner;
//
//import com.google.inject.Inject;
//
//import dao.UserDao;
//import models.User;
//import ninja.Context;
//import ninja.Result;
//import ninja.session.Session;
//
////MockitoJUnitRunner gives automatic validation
////of framework usage, as well as an automatic initMocks()
//@RunWith(MockitoJUnitRunner.class)
//
////Main class
//public class TodoServiceImplMockTest {
//
//	TodoServiceImpl todoBusiness;
//	
//	
//	@Mock
//  private UserDao userDao;
//  @Mock
//  private Session session;
//  @Mock
//  private Context context;
//  
//  @Inject
//  private UserController userController;
//
//	// The Mockito.mock() method allows us to
//	// create a mock object of a class or an interface
//	@Mock TodoService todoServiceMock;
//
//	// Methods annotated with the @Before
//	// annotation are run before each test
//	@Before public void setUp()
//	{
//		todoBusiness = new TodoServiceImpl(todoServiceMock);
//	}
//
//	// @Test
//	// Tells the JUnit that the public void method
//	// in which it is used can run as a test case
//	    @Test
//	    public void createUser(){
//
//	        User user = new User();
//	        user.id= "xyz";
//	        user.email = "xyz@gmail.com";
//	        user.password = "Xyz@1234";
//	        user.name = "xyz";
//	        user.gender = "male";
//
//	        when(userDao.createUser(user)).thenReturn(user);
//	        Result result = userController.post_user(user,session);
//	        assertEquals(200,result.getStatusCode());
//	    }
//	    
//	    
//	    
//	    @Test
//	    public void count() throws Exception {
//	        when(userDao.countAllUsers()).thenReturn(10l);
//	        Result result = userController.countAllUsers();
//	        assertEquals(200,result.getStatusCode());
//	    }
//
////	@Test
////	public void
////	testRetrieveTodosRelatedToSpring_withEmptyList_usingMock()
////	{
////		List<String> todos = Arrays.asList();
////		when(todoServiceMock.retrieveTodos("Dummy"))
////			.thenReturn(todos);
////
////		List<String> filteredTodos
////			= todoBusiness.retrieveTodosRelatedToJava(
////				"Dummy");
////		assertEquals(0, filteredTodos.size());
////	}
//}
//
