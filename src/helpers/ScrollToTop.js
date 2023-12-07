import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();
    const [prevPathname, setPrevPathname] = useState(null);

    useEffect(() => {
        if (prevPathname !== pathname) {
            window.scrollTo(0, 0);
            setPrevPathname(pathname);
        }
    }, [pathname, prevPathname]);

    return null;
}

export default ScrollToTop;
