module.exports = ({ env }) => ({
    // for sendgrid
    email: {
        provider: 'sendgrid',
        providerOptions: {
            apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
            defaultFrom: 'elsayedmubarak68@gmail.com',
            defaultReplyTo: 'elsayedmubarak68@gmail.com',
        },
    },
});

module.exports = {
    // for graphql
    graphql: {
        endpoint: '/graphql',
        tracing: false,
        shadowCRUD: true,
        playgroundAlways: false,
        depthLimit: 7,
        amountLimit: 100,
    },
};