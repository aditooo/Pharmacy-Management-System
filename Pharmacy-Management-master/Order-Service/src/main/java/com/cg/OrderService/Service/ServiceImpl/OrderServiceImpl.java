package com.cg.OrderService.Service.ServiceImpl;

import com.cg.OrderService.Model.Order;
import com.cg.OrderService.Repository.OrderRepository;
import com.cg.OrderService.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {


    @Autowired
    OrderRepository orderRepository;



    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Optional<Order> findOrderById(int id) {
        return orderRepository.findById(id);
    }

    @Override
    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public void deleteOrderById(int id) {
        orderRepository.deleteById(id);
    }

//    @Override
//    public String placeOrder(Order order) {
//
//        orderRepository.placeOrder(order);
//        return "";
//    }
}
