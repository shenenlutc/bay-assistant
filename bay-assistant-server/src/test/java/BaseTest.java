import com.bayer.bayassistant.BayAssistantApplication;
import com.bayer.bayassistant.dao.ApplicationDao;
import com.bayer.bayassistant.entity.Application;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;


//@RunWith(SpringRunner.class)
//@SpringBootTest(classes = BayAssistantApplication.class)
public class BaseTest {

//    @Autowired
    private ApplicationDao applicationDao;

//    @Test
    public void testApp() {
        List<Application> allApplication = applicationDao.findAll();
        System.out.println(allApplication);

    }
}