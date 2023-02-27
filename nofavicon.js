const FAVICON_URL = /\/favicon\.ico/gi;
const CODE_NO_CONTENT = 204;

/**
 * @param {*} req - The Express request
 * @param {*} res - The Express response
 * @param {Function} next - Function to call when the middleware successfully completes
 */
module.exports = (req, res, next) => FAVICON_URL.test(req.url) ? res.sendStatus(CODE_NO_CONTENT) : next();
