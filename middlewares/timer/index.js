/*module.exports = strapi => {
    return {
        // root middelware execute every request hit
        initialize() {
            strapi.app.use(async (ctx, next) => {
                const start = Date.now();

                await next();
                const delta = Math.ceil(Date.now() - start); // Round a number upward to its nearest integer:

                console.log(" im here on middelware ...",delta,"int")

                ctx.set('X-Response-Time', delta + 'ms');
            });
        },
    };
};*/