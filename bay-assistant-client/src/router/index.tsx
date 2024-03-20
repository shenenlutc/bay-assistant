import Application from '../view/Application';
import Faq from '../view/Faq';
import Notice from '../view/Notice';
import About from '../view/About';
import Help from '../view/Help';
import appIcon from '../assets/img/appIcon.png';
import noticeIcon from '../assets/img/noticeIcon.png';
import faqIcon from '../assets/img/faqIcon.png';
import aboutIcon from '../assets/img/aboutIcon.png';
import helpIcon from '../assets/img/helpIcon.png';

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

const routesMap = new Map();
for(let i = 0; i < routes.length; i++) {
    routesMap.set(routes[i].href, routes[i]);
}

export {routes, routesMap};
