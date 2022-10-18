package com.cg.OrderService.Repository;

import com.cg.OrderService.Model.Order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends MongoRepository<Order,Integer> {
    //String placeOrder(Order order);
}
