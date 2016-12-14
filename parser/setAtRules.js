const getBlockName = require('./utils/getBlockName');
const getElementName = require('./utils/getElementName');
const getModifierName = require('./utils/getModifierName');
const getStateName = require('./utils/getStateName');

module.exports = function({
    selector = null,
    components = null,
    atRules = null,
}) {
    const blockName = getBlockName(selector);
    const component = components[blockName];
    const elementName = getElementName(selector);
    const modifierName = getModifierName(selector);
    const stateName = getStateName(selector);

    if (elementName) {
        if (modifierName) {
            component.elements[elementName].modifiers[modifierName].atRules = atRules;
        } else {
            component.elements[elementName].atRules = atRules;
        }
    } else if (modifierName) {
        component.modifiers[modifierName].atRules = atRules;
    } else if (stateName) {
        component.states[stateName].atRules = atRules;
    } else if (component) {
        component.atRules = atRules;
    }
};
