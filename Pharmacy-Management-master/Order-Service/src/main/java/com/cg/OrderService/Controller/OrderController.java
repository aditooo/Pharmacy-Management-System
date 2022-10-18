package com.cg.OrderService.Controller;

import com.cg.OrderService.Exception.NoOrderPresentException;
import com.cg.OrderService.Exception.ResourceNotFoundException;
import com.cg.OrderService.Model.DoctorsData;
import com.cg.OrderService.Model.DrugsData;
import com.cg.OrderService.Model.Order;
import com.cg.OrderService.Service.OrderService;
import com.cg.OrderService.Service.SequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/order")
@CrossOrigin
public class OrderController {

    @Autowired
    OrderService orderService;
    @Autowired
    RestTemplate restTemplate;

    Order order = new Order();

    DrugsData drugsData = new DrugsData();

    DoctorsData doctorsData = new DoctorsData();
    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;

    @GetMapping("")
    public ResponseEntity<List<Order>> getAllOrders() throws NoOrderPresentException {
        List<Order> list = orderService.getAllOrders();
        if (list.isEmpty()) {
            throw new NoOrderPresentException("There are no orders present in the database!");
        }
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> findOrderById(@PathVariable int id) throws NoOrderPresentException {
        Optional<Order> order = orderService.findOrderById(id);
        if (order.isEmpty()) {
            throw new NoOrderPresentException("No order found with id: " + id);
        }
        return ResponseEntity.ok(order.get());
    }

    @PostMapping("/save")
    public ResponseEntity<Order> saveOrder(@RequestBody Order order) throws ResourceNotFoundException{

        String drugname = order.getDrugname();
        String doctorname = order.getDoctorname();
        if((drugname)== null ){
            throw new ResourceNotFoundException("No Drug Found with name "+drugname +
                    "and no doctor found by name "+ doctorname);
        }
        else {
            DrugsData drugsData = restTemplate.getForObject("http://Drugs-Info-Service/api/drugs/drugsname/" +
                    drugname, DrugsData.class);
//            DoctorsData doctorsData = restTemplate.getForObject("http://User-Service/doctors/username/" +
//                    doctoremail, DoctorsData.class);
            int q1 = drugsData.getDrugQuantity();
            //int l;
            if(q1>order.getQuantity()) {
                double cost = drugsData.getDrugPrice() * order.getQuantity();
//                l=q1- order.getQuantity();
//                drugsData.setDrugQuantity(l);
                //String dName = doctorsData.getName();
                order.setCost(cost);
                //order.setDoctorname(dName);
                order.setId(sequenceGeneratorService.getSequenceNumber(Order.SEQUENCE_NAME));
                //String x = "Your order with order Id " + order.getId() + " with value " + cost + " is placed by "+
                //dName;
                String x = "Your order with order Id " + order.getId() + " with value " + cost + " is placed by " + doctorname;
                System.out.println(x);
                Order savedOrder = orderService.saveOrder(order);
                return ResponseEntity.ok(savedOrder);
            }
            else {
                throw new ResourceNotFoundException("Not enough Stock");
            }
            //return ResponseEntity.ok(x);
        }

    }

    @DeleteMapping("/delete/{id}")
    public void deleteByid(@PathVariable int id) throws NoOrderPresentException {
        Optional<Order> order = orderService.findOrderById(id);
        if (order.isEmpty()) {
            throw new NoOrderPresentException("No order found with id: " + id);
        }
        orderService.deleteOrderById(id);
    }


}
