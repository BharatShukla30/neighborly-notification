self.addEventListener('push', event => {
    const data = event.data.json(); // Assuming the payload is in JSON format

    const options = {
        body: data.body,
        icon: '/path/to/your/icon.png',
        data: {
            url: data.link, // Customize the link to open when the notification is clicked
        },
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});