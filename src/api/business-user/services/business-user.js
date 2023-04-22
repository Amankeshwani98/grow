'use strict';

/**
 * business-user service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::business-user.business-user');
