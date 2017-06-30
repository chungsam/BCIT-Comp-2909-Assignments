emailApp.factory("emailService", function () {
    return {
        sendEmail: function (address, subject, body) {
            console.log("Contact Email: " + address);
            console.log("Subject: " + subject);
            console.log("Body: " + body);

            return true;
        }
    }
});
