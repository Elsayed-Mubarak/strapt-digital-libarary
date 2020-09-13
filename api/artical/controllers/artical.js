'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports.create = async (ctx) => {

    let entity;
    if (ctx.is('multipart')) {
        const { data, files } = parseMultipartData(ctx);
        data.author = ctx.state.user.id;
        entity = await strapi.services.artical.create(data, { files });
    } else {
        ctx.request.body.author = ctx.state.user.id;
        console.log(".......ctx.request.body........", ctx.request.body);
        console.log(".......ctx.request.state........", ctx.state);
        entity = await strapi.services.artical.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.artical });
};


module.exports = {
    async find(ctx) {
        let entities;

        ctx.query = { ...ctx.query, status: 'published', };
                console.log(",,,,,ent ctx.query ities,,,,,",  ctx.query )

        try {
            if (ctx.query._q) {
                entities = await strapi.services.artical.search(ctx.query);
            } else {
                entities = await strapi.services.artical.find(ctx.query);
                console.log(",,,,,entities,,,,,", entities)

            }
            return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.artical }));

        }
        catch (err) {
            console.log(",,,,,err on find articalis,,,,,", err)
        }
    }
};
