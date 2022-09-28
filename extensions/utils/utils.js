function format(seconds) {
    function pad(s) {
        return (s < 10 ? '0' : '') + s;
    }

    let hours = Math.floor(seconds / (60 * 60));
    let minutes = Math.floor(seconds % (60 * 60) / 60);
    let seconds_mod = Math.floor(seconds % 60);

    return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds_mod);
}

module.exports = format;
