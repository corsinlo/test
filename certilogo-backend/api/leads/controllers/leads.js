'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async create(ctx) {
      const { email } = ctx.request.body;
      const existingLead = await strapi.services.leads.findOne({ email });
      if (existingLead) {
        return ctx.badRequest('A lead with this email already exists');
      }
      const newLead = await strapi.services.leads.create(ctx.request.body);
      return newLead;
    },
};