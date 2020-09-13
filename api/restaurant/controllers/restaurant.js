//'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

// custom controller find all resturant and delete _id
const { sanitizeEntity } = require('strapi-utils');


module.exports = {
  async find(ctx) {
    let entities;
    console.log("......strapi.services.restaurant.search(ctx req);.......", ctx.state);
    try {
      if (ctx.query._q) {
        console.log("......strapi.services.restaurant.search(ctx.query);.......", ctx.query);

        entities = await strapi.services.restaurant.search(ctx.query);
      } else {
        console.log("......strapi.services.restaurant.find(ctx.query).......", ctx.query);

        entities = await strapi.services.restaurant.find(ctx.query);
      }
      return entities.map(entity => {
        const restaurant = sanitizeEntity(entity, { model: strapi.models.restaurant })
        console.log("......sentity.......", restaurant);

        if (restaurant._id) {
          delete (restaurant._id)
        }
        return restaurant;
      });
    } catch (err) {
      console.error(err);
    }
  }


};

/*
    async findOne(ctx) {
        const { id } = ctx.params;

        const entity = await strapi.services.restaurant.findOne({ id });
        return sanitizeEntity(entity, { model: strapi.models.restaurant });
    },

    */


