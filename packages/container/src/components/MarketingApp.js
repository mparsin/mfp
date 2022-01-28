import { mount } from 'marketing/MarketingApp';
import React, {useRef, useEffect} from "react";
import { useHistory} from "react-router-dom";

export default ({ isSignedIn }) => {
    const ref = useRef(null)
    const history = useHistory();
    console.log('isSignedIn', isSignedIn);

    useEffect(() => {
        const {onParentNavigate} = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({pathname: nextPathname}) => {
                const {pathname} = history.location;
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            },
            isSignedIn: isSignedIn
        });

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref}></div>
}
