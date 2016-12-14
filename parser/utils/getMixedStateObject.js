module.exports = function({
    stateName = null,
    pseudoStateName = null,
}) {
    return {
        atRules: {},
        pseudo: pseudoStateName,
        state: stateName,
    };
};
