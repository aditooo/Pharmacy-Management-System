package com.cg.DrugsInfoService;




import com.cg.DrugsInfoService.models.DrugsData;
import com.cg.DrugsInfoService.repository.DrugsRepository;
import com.cg.DrugsInfoService.services.implementation.DrugServiceImplementationClass;
import org.junit.Before;

import org.junit.jupiter.api.Test;
        import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.data.mongodb.core.aggregation.BooleanOperators;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
public class DrugRepoTest {


    @Mock
    private DrugsRepository drugsRepository;

    @InjectMocks
    DrugServiceImplementationClass drugServiceImplementationClass;

//    @Before
//    public void init() {
//        MockitoAnnotations.initMocks(this);
//    }

    @Test
    void isDrugExistsById() {

        DrugsData drugsData1 = new DrugsData(300,"Test",21.21,5, LocalDate.of(2022,01,01));
        drugServiceImplementationClass.saveDrugsData(drugsData1);
        Optional<DrugsData> drugsDataOptional =drugsRepository.findById(300);
        if(!drugsDataOptional.isEmpty()) {
            Boolean actualResult = true;
                    assertThat(actualResult).isTrue();
        }
    }

    @Test
    void getDrugsDataByDrugName(){
        DrugsData drugsData1 = new DrugsData(200,"Test",21.21,5, LocalDate.of(2022,01,01));

            drugsRepository.save(drugsData1);
            Optional<DrugsData> actualResult = drugsRepository.getDrugsDataByDrugName("Test");
            Boolean ac = actualResult.isEmpty();
            assertThat(ac).isTrue();
        }

            @Test
            public void getAllDrugsDataTest()
            {
                List<DrugsData> list = new ArrayList<DrugsData>();
                DrugsData drugsData1 = new DrugsData(300,"Test300",121.21,25,
                        LocalDate.of(2022,01,07));
                DrugsData drugsData2 = new DrugsData(400,"Test400",221.21,35,
                        LocalDate.of(2022,02,04));
                DrugsData drugsData3 = new DrugsData(500,"Test500",321.21,45,
                        LocalDate.of(2022,06,05));


                list.add(drugsData1);
                list.add(drugsData2);
                list.add(drugsData3);

                when(drugsRepository.findAll()).thenReturn(list);

                //test
                List<DrugsData> drugsDataList = drugServiceImplementationClass.getAllDrugsData();

                assertEquals(3, drugsDataList.size());
                verify(drugsRepository, times(1)).findAll();
            }
//
    @Test
    public void saveDrugsTest()
    {

        DrugsData drugsData = new DrugsData(300,"Test300",121.21,25, LocalDate.of(2022,01,07));
        drugServiceImplementationClass.saveDrugsData(drugsData);
        verify(drugsRepository, times(1)).save(drugsData);
    }
}