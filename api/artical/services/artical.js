'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {

    async create(data, { files } = {}) {
        let that = this;
        const entry = await strapi.query('artical').create(data);

        if (files) {
            // automatically uploads the files based on the entry and the model
            await strapi.entityService.uploadFiles(entry, files, {
                model: 'artical',
                // if you are using a plugin's model you will have to add the `source` key (source: 'users-permissions')
            });
            return that.findOne({ id: entry.id });
        }

        return entry;
    },
};

/*
module.exports = {}
*/