module.exports = text => {
    if (!text.match(/@bemagic/)) {
        return;
    }

    const atRules = {};
    const lines = text.split('\n');

    lines.forEach(function(line) {
        let prop = line.split(/:/)[0].replace(/:/, '');
        let val = line.split(/:/)[1];

        if (prop && val) {
            prop = prop.replace(',', '').trim();
            val = val.replace(',', '').trim();
            val = val === 'true' ? true : val;
            val = val === 'false' ? false : val;
            // convert none to null...
            atRules[prop] = val === '\'\'' ? '' : val;
        }
    });

    return atRules;
};
