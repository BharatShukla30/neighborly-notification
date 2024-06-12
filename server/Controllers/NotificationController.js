const { getMessaging } = require("firebase-admin/messaging");

exports.sendNotification = async(req, res) => {
    const { title, content, token } = req.body;

    const message = {
        data: {
            title,
            content
        },
        token
    };

    // Send a message to the device corresponding to the provided
    // registration token.
    getMessaging().send(message)
        .then((response) => {
            // Response is a message ID string.
            console.log('Successfully sent message:', response);
            res.status(200).json({
                "message": "Notification sent successfully"
            })
        })
        .catch((error) => {
            console.log('Error sending message:', error);
            res.status(500).json({
                "message": "Something wrong with send notification"
            })
        });
}