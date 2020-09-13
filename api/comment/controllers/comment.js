//'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const Filter = require('bad-words');
const filter = new Filter();

module.exports = {
    async create(ctx) {
        let entity;
        if (ctx.is('multipart')) {
            const { data, files } = parseMultipartData(ctx);
            entity = await strapi.services.comment.create(data, { files });
        } else {
            console.log("......ctx.request.body........", ctx.request.body);
            entity = await strapi.services.comment.create(ctx.request.body);
        }
        //remove all private feild from comment model
        entity = sanitizeEntity(entity, { model: strapi.models.comment });

        // check if the comment content contains a bad word
        if (entity.content !== filter.clean(entity.content)) {
            console.log("......entity........", entity);


            // send an email by using the email plugin
            const msg = {
                to: 'elsayedmubarak68@gmail.com',
                from: 'elsayedmubarak68@gmail.com', // Use the email address or domain you verified above
                subject: 'Sending with Twilio SendGrid is Fun',
                text: `
          The comment #${entity.id} contain a bad words.

          Comment:
          ${entity.content}
        `,
                html: '<strong>and easy to do anywhere, even with Node.js</strong>',
            };

            (async () => {
                try {
                    await sgMail.send(msg);
                } catch (error) {
                    console.error("........error catch........", error);
                    if (error.response) {
                        console.error(error.response.body)
                    }
                }
            })();

        }
        return entity;
    },

};