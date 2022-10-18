package com.cg.OrderService.Service;

import com.cg.OrderService.Model.Order;

import java.util.List;
import java.util.Optional;


public interface OrderService {

    public List<Order> getAllOrders();

    public Optional<Order> findOrderById(int id);

    public Order saveOrder(Order order);

    public void deleteOrderById(int id);

    //public String placeOrder(Order order);
}
