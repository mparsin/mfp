import { mount } from 'marketing/MarketingApp';
import React, {useRef, useEffect} from "react";
import { useHistory} from "react-router-dom";

export default () => {
    const ref = useRef(null)
    const history = useHistory();

    useEffect(() => {
        const {onParentNavigate} = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({pathname: nextPathname}) => {
                console.log('on navigate')
                const {pathname} = history.location;
                console.log(pathname, nextPathname);
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            }
        });

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref}></div>
}
