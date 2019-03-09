module.exports = {
    twitter: {
        consumerKey: process.env['TWITTER_CONSUMER_KEY'],
        consumerSecret: process.env['TWITTER_CONSUMER_SECRET'],
    },
    mongodb: {
        dbURI: 'mongodb://localhost/twitterhelpdesk'
    },
    session: {
        cookieKey: 'twitterhelpdeskcookie'
    }
}