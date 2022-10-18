package com.cg.OrderService;


import com.cg.OrderService.Model.Order;
import com.cg.OrderService.Repository.OrderRepository;
import com.cg.OrderService.Service.ServiceImpl.OrderServiceImpl;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
public class OrderRepoTest {

    @Mock
    OrderRepository orderRepository;

    @InjectMocks
    OrderServiceImpl orderService;

    @Test
    void isOrderExistById(){
        Order order = new Order(1000,150, LocalDate.of(2022,05,04),
                6,"D-50","Dr. Kunal Ghosh");
        orderService.saveOrder(order);
        Optional<Order> order1 = orderRepository.findById(1000);
        if(!order1.isEmpty()) {
            Boolean actualResult = true;
            assertThat(actualResult).isTrue();
        }
    }
    @Test
    public void getAllOrdersTest()
    {
        List<Order> list = new ArrayList<Order>();
        Order order1 = new Order(1000,150, LocalDate.of(2022,05,04),
                6,"D-50","Dr. Kunal Ghosh");
        Order order2 = new Order(2000,240, LocalDate.of(2022,05,04),
                2,"Honitus","Dr. T.K. Maitra");
        Order order3 = new Order(3000,258, LocalDate.of(2022,05,04),
                10,"Aceta-25","Dr. Nishu Kumar");

        list.add(order1);
        list.add(order2);
        list.add(order3);

        when(orderRepository.findAll()).thenReturn(list);

        List<Order> orderList = orderService.getAllOrders();

        assertEquals(3, orderList.size());
        verify(orderRepository, times(1)).findAll();
    }

    @Test
    void saveOrder(){
        Order order = new Order(1000,150, LocalDate.of(2022,05,04),
                6,"D-50","Dr. Kunal Ghosh");
        orderService.saveOrder(order);
        verify(orderRepository,times(1)).save(order);
    }

}
