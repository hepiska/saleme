'use strict';

/**
 * Dress.js controller
 *
 * @description: A set of functions called "actions" for managing `Dress`.
 */

module.exports = {

  /**
   * Retrieve dress records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.dress.search(ctx.query);
    } else {
      return strapi.services.dress.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a dress record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.dress.fetch(ctx.params);
  },

  /**
   * Count dress records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.dress.count(ctx.query);
  },

  /**
   * Create a/an dress record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.dress.add(ctx.request.body);
  },

  /**
   * Update a/an dress record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.dress.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an dress record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.dress.remove(ctx.params);
  }
};
