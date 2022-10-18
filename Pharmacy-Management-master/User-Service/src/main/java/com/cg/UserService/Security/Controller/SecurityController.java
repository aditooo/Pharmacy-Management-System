package com.cg.UserService.Security.Controller;

import com.cg.UserService.Models.DoctorsData;
import com.cg.UserService.Security.Model.AuthenticationRequest;
import com.cg.UserService.Security.Model.AuthenticationResponse;
import com.cg.UserService.Security.Util.JwtUtil;
import com.cg.UserService.Service.DoctorDataService;
import com.cg.UserService.Service.SequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin
public class SecurityController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    SequenceGeneratorService sequenceGeneratorService;

    @Autowired
    DoctorDataService doctorDataService;

    @RequestMapping({ "/hello" })
    public String firstPage() {
        return "Hello World";
    }




    @PostMapping("/signup")
    public ResponseEntity<DoctorsData> saveDoctorsData(@RequestBody DoctorsData doctorsData)  {
        doctorsData.setDoctorId((sequenceGeneratorService.getSequenceNumber(DoctorsData.SEQUENCE_NAME)));
        DoctorsData savedDoctorsData = doctorDataService.saveDoctorsData(doctorsData);
        return ResponseEntity.ok(savedDoctorsData);
    }
    //@CrossOrigin("http://localhost:3000")
    @RequestMapping(value="/auth/signin", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest)
            throws Exception {

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken
                    (authenticationRequest.getUsername(), authenticationRequest.getPassword()));
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect Username or Password", e);
        }
        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails);
        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }

}
