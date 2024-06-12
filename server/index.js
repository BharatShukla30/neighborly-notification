const Express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const serviceAccount = require("./firebase.json");
const notificationRoute = require("./Routes/NotificationRoute");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const app = new Express();

app.use(bodyParser.json());

try {app.use("/notifications", notificationRoute);} catch(err) {
    console.log(err);
}

app.listen(5003, () => {
    console.log(`Server started on port 5003`);
});