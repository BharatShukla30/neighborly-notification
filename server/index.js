const Express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");

const serviceAccount = require("./firebase.json");
const { getMessaging } = require("firebase-admin/messaging");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const app = new Express();
const router = Express.Router();

app.use(bodyParser.json());
app.use("/", router);

app.listen(5000, () => {
    console.log(`Server started on port 5000`);
});

router.post("/notifications", (req, res) => {
    const {title, content, token} = req.body;

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
});