"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBeValidAgErrorClass = void 0;
const toBeValidAgErrorObject_1 = require("./toBeValidAgErrorObject");
const toBeValidAgErrorClassIndependentOfSourceName_1 = require("./toBeValidAgErrorClassIndependentOfSourceName");
function toBeValidAgErrorClass(ReceivedClass, name, hierarchicalName) {
    if (this.isNot) {
        throw new Error('toBeValidAgErrorClass() is not compatible with the .not modifier');
    }
    let message = '';
    let pass = true;
    // First test an instance has correct name and hierachicalName
    const err = new ReceivedClass();
    const objectTestResult = toBeValidAgErrorObject_1.toBeValidAgErrorObject.bind(this)(err, name, hierarchicalName);
    message += objectTestResult.message();
    pass = pass && objectTestResult.pass;
    // Secondly test that the name of instances is independent of the class name
    // (constructor.name) in the original source
    const relianceTestResult = toBeValidAgErrorClassIndependentOfSourceName_1.toBeValidAgErrorClassIndependentOfSourceName.bind(this)(ReceivedClass);
    message += relianceTestResult.message();
    pass = pass && relianceTestResult.pass;
    return {
        message: () => message,
        pass,
    };
}
exports.toBeValidAgErrorClass = toBeValidAgErrorClass;
//# sourceMappingURL=toBeValidAgErrorClass.js.map