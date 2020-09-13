'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#cron-tasks
 */




module.exports = {
  '*/1 * * * *': async () => {
    // fetch articles to publish
    const draftArticalToPublish = await strapi.api.artical.services.artical.find({
      status: 'draft',
      publish_at_lt: new Date(),
    });

    // update status of articles
    draftArticalToPublish.forEach(async artical => {
      await strapi.api.artical.services.artical.update({ id: artical.id }, { status: 'published' });
    });
  },
};




module.exports = {
  /**  everyday at 2am */
  '0 2 * * *': () => {
    strapi.config.functions.docker();
  },
};

module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */
  // '0 1 * * 1': () => {
  //
  // }
};
