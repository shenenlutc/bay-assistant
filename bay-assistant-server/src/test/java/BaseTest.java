import com.bayer.bayassistant.BayAssistantApplication;
import com.bayer.bayassistant.dao.ApplicationDao;
import com.bayer.bayassistant.dao.FilenetDao;
import com.bayer.bayassistant.entity.Application;
import com.bayer.bayassistant.entity.Filenet;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;
import java.util.Optional;


//@RunWith(SpringRunner.class)
//@SpringBootTest(classes = BayAssistantApplication.class)
public class BaseTest {

//    @Autowired
    private ApplicationDao applicationDao;

//    @Autowired
    private FilenetDao filenetDao;

//    @Test
    public void testApp() {
        List<Application> allApplication = applicationDao.findAll();
        System.out.println(allApplication);

    }

    @Test
    public void testFile() {
        Optional<Filenet> one = filenetDao.findById(409L);
//        List<Filenet> one = filenetDao.findAll();
        System.out.println(one.get());
    }


}