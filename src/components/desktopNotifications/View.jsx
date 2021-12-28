import React, { useState, useEffect } from 'react';
import { getToken } from '../../fiberbaseInit';

export default function DesktopNotification() {
    // eslint-disable-next-line no-unused-vars
    const [isTokenFound, setIsTokenFound] = useState(false);

    //console.log('Token Found ', isTokenFound);

    let data;
    async function tokenFunc() {
        data = await getToken(setIsTokenFound);
        if (data) {
            //TODO: send the token to the backend
            //console.log('Token is ', data);
            localStorage.setItem(
                'desktopToken',
                JSON.stringify({ token: data })
            );
        }
        return data;
    }

    useEffect(() => {
        tokenFunc();
    }, [setIsTokenFound]);

    return <></>;
}
