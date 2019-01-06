//
// Entry point for the publish script.
// Publish copies files from the /cl/dist directory into
// the dist directories of components. It publishes the files
// for distribution via composer.
//
const Publisher = require('./js/Publish/Publisher');
const publish = require('../../../publish');

Publisher.publish(publish);
