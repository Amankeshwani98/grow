'use strict';

/**
 * service-user service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-user.service-user');
