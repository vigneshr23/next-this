import {useRouter} from 'next/router';
import { useEffect } from 'react';
function PrivateBlog() {
    const route = useRouter();
    const isAuth = route.query.auth
    useEffect(() => {
        if(isAuth) {
            route.push({
                pathname: '/',
                query: {
                    date: Date.now(),
                    redirectedFrom: route.pathname
                }
            })
        }
    }, [isAuth])
    return <div>
        This is Private Path
    </div>;
}

export default PrivateBlog