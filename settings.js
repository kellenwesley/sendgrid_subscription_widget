// Change the url to the domain of your app
exports.url = 'https://subscriptionaz.herokuapp.com';

exports.senderEmail = "inbox@azsbe.az.gov";
exports.senderName = "Arizona State Board of Education";

// set 'exports.listId = null' to add contact to all contacts, but no specific list
// or a string with the listId to add to a specific list
exports.listId = null;

// set 'exports.templateId = null' to opt out of using a template
// or a string with the templateId to use a template
exports.templateId = "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"

// receive an email when a new signup is confirmed
exports.sendNotification = true;
exports.notificationEmail = "inbox@azsbe.az.gov";
