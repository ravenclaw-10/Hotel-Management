package controllers;

import dao.UserDao;
//import dto.UserDto;
import models.User;
import ninja.Context;
import ninja.NinjaTest;
import ninja.Result;
import ninja.session.Session;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.lenient;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class ControllerTest extends NinjaTest {

    @Mock
    private UserDao userDao;
    @Mock
    private Session session;
    @Mock
    private Context context;

    private UserController userController;

    // this will be executed only once before the execution of all the test cases we can use @Before and @BeforeAll
    @Before
    public void setupTest(){
        userController = new UserController();
        userController.userDao = userDao;

    }
    
    
    @Test
    public void createUser(){

        User user = new User();
        user.id= "xyz";
        user.email = "xyz@gmail.com";
        user.password = "Xyz@1234";
        user.name = "xyz";
        user.gender = "male";

        when(userDao.createUser(user)).thenReturn(user);
        Result result = userController.post_user(user,session);
        assertEquals(200,result.getStatusCode());
    }
    
    
    
    @Test
    public void count() throws Exception {
        when(userDao.countAllUsers()).thenReturn(10l);
        Result result = userController.countAllUsers();
        assertEquals(200,result.getStatusCode());
    }
    
    
//    @Test
//    public void count2() throws Exception {
//        when(userDao.countAllUsers()).thenReturn(null);
//        Result result = userController.countAllUsers();
//        assertEquals(400,result.getStatusCode());
//    }
    



}
