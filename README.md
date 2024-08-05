# neighborly-notification
Notification handling for neighborly

## Process to run Notification Server

1. Pull the branch from GitHub
2. Now open the __Server__ folder in cmd and run `npm run dev`
3. The server will start at port number: 5003
4. Now to send the notification you require: _title_, _content_, _token_
5. For generating token for demo purpose. Follow the given commands:
   1. Open folder __Notify__ in cmd and run `npm start`
   2. To get the token please open the console in browser
   3. now click on the button _Enable Push Notification_
   4. You will get the token generated on console
6. Now you are ready to send notification using Postman.

### Url for notification
http://localhost:5003/notifications/notification

Method Type: POST
Body: title, content, token
