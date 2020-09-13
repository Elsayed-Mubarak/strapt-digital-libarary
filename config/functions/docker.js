const axios = require('axios');
module.exports =
    async () => {
        const { data } = await axios.get('https://hub.docker.com/v2/repositories/strapi/strapi/');

        await strapi.query('hit').create({
            date: new Date(),
            count: data.pull_count,
        });
    };

/** data contains all the data received from the Docker Hub API.
 *  With this code, everytime this function is called it will fetch the docker repo's data
 * and insert the current pull_count with the corresponding date in your Strapi databa
 *    call fun =>   strapi.config.functions.docker()  */