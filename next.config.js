
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextSettings = {
    env: {
        title: 'Test App',
        titleDescription: 'Test App Description',
    },
};

module.exports = withPlugins([withImages(), nextSettings]);
