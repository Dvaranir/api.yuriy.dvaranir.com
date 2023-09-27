'use strict';

/**
 * small-project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::small-project.small-project');
