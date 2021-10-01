"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./types");
const toBeValidAgErrorClass_1 = require("./matchers/toBeValidAgErrorClass");
const toBeValidAgErrorObject_1 = require("./matchers/toBeValidAgErrorObject");
const toBeValidAgErrorClassIndependentOfSourceName_1 = require("./matchers/toBeValidAgErrorClassIndependentOfSourceName");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
expect.extend({
    toBeValidAgErrorClass: toBeValidAgErrorClass_1.toBeValidAgErrorClass,
    toBeValidAgErrorObject: toBeValidAgErrorObject_1.toBeValidAgErrorObject,
    toBeValidAgErrorClassIndependentOfSourceName: toBeValidAgErrorClassIndependentOfSourceName_1.toBeValidAgErrorClassIndependentOfSourceName,
});
//# sourceMappingURL=index.js.map