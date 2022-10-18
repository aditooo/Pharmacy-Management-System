package com.cg.UserService;

import com.cg.UserService.Security.Service.MyUserDetailsService;
import org.junit.jupiter.api.*;
import org.springframework.security.core.userdetails.UserDetails;

import static org.junit.jupiter.api.Assertions.*;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class MyUserDetailsServiceTest {

    MyUserDetailsService myUserDetailsService;


    @BeforeAll
    static void beforeAllInit(){//here we are giving static as because static method can be called before initialization
        System.out.println("This need to run before all method.....");
    }

    @BeforeEach
// this is method id going to run before each method runs.
    void init() {
        myUserDetailsService=new MyUserDetailsService();
    }


    @Nested
    class LoginTest {
        @Test//this is used for testing code
        @DisplayName("Testing Login Method Username")
        void testLoginUsername() {//int expected=2;
            //int actual=mathutils.add(1, 1);
            assertEquals("admin", myUserDetailsService.loadUserByUsername("admin"),
                    "Username must be admin ");
        }
        @Test//this is used for testing code
        @DisplayName("Testing Login Method Password")
        void testLoginPassword() {

            assertEquals("admin", myUserDetailsService.loadUserByUsername("admin"),
                    "Password must be admin ");
        }
    }
    @AfterEach// this is used to call this method after each method ....
    void cleanup() {
        System.out.println("Cleaning up....");
    }


}
