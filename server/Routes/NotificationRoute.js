const Express = require("express");
const router = Express.Router();

const {sendNotification} = require('../Controllers/NotificationController');

router.route("/notification").post(sendNotification);

module.exports = router;