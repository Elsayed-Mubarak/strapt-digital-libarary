module.exports = {
    load: {
        before: ['timer', 'sentry', 'responseTime', 'logger', 'cors', 'responses', 'gzip'],
        order: [
            "Define the middlewares' load order by putting their name in this array is the right order",
        ],
        after: ['parser', 'router'],
    }

    ,
    settings: {

        //    timer: { enabled: true },
        sentry: { enabled: true },
        cors: { enabled: true },
    },
};