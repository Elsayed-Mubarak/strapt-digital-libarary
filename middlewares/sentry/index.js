const Sentry = require('@sentry/node');
const Tracing = require("@sentry/tracing");

Sentry.init({
    dsn: 'https://24b04fb13d2e4dbeac7948d2e2199e07@o445296.ingest.sentry.io/5421515',
    environment: strapi.config.environment,
    tracesSampleRate: 1.0,
});

module.exports = strapi => {
    return {
        initialize() {
            strapi.app.use(async (ctx, next) => {
                try {
                    await next();
                } catch (error) {
                    Sentry.captureException(error);
                    throw error;
                }
            });
        },
    };
};