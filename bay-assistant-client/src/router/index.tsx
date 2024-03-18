import Application from '../view/Application';
import Faq from '../view/Faq';
import Notice from '../view/Notice';
import About from '../view/About';
import Help from '../view/Help';
import appIcon from '../assets/appIcon.png';
import noticeIcon from '../assets/noticeIcon.png';
import faqIcon from '../assets/faqIcon.png';
import aboutIcon from '../assets/aboutIcon.png';
import helpIcon from '../assets/helpIcon.png';

const routes:Array<any> = [
    {
        icon: appIcon,
        key: 'application',
        label: '应用',
        href: '/application',
        view: <Application />
    },
    {
        icon: noticeIcon,
        key: 'notice',
        label: '通知',
        href: '/notice',
        view: <Notice />
    },
    {
        icon: faqIcon,
        key: 'faq',
        label: '常见问题',
        href: '/faq',
        view: <Faq />
    },
    {
        icon: aboutIcon,
        key: 'about',
        label: '关于',
        href: '/about',
        view: <About />
    },
    {
        icon: helpIcon,
        key: 'help',
        label: '使用帮助',
        href: '/help',
        view: <Help />
    },
]

export default routes;
