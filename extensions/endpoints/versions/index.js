const format = require("../../utils/utils");
module.exports = function versionInfo(router,logger) {
    router.get('/', (_req, res) => {
        logger.info("versions");
        const uptime = process.uptime();
        return res.json(
            {
                name: process.env.NAME,
                version: process.env.VERSION,
                uptime: format(uptime),
            }
        );
    });
}
