import React, { useEffect } from 'react';
import { messaging } from '../firebase';
import { getToken } from 'firebase/messaging';

const PushNotificationButton = () => {
    const token = () => {
        getToken(messaging, { vapidKey: 'BGstQ3414YNMmo_AWNb4Jsc2hMn_IGS1JOKm_4bkO_B4eIL63w8DDOQxaGa1ZIsdthZnUtnj8LR4WJgD6W-YRME'}).then((currentToken) => {
            console.log(currentToken);
        }).catch(err => console.error(err))
    };

    return (
        <button onClick={token}>Enable Push Notifications</button>
    );
};

export default PushNotificationButton;