import React, { useState, useEffect } from 'react';
import { getToken } from '../../fiberbaseInit';

export default function DesktopNotification() {
    // eslint-disable-next-line no-unused-vars
    const [isTokenFound, setIsTokenFound] = useState(false);

    let data;
    async function tokenFunc() {
        data = await getToken(setIsTokenFound);
        if (data) {
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
