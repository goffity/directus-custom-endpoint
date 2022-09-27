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

    function format(seconds) {
        function pad(s) {
            return (s < 10 ? '0' : '') + s;
        }

        let hours = Math.floor(seconds / (60 * 60));
        let minutes = Math.floor(seconds % (60 * 60) / 60);
        let seconds_mod = Math.floor(seconds % 60);

        return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds_mod);
    }
}
