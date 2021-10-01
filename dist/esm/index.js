import './types';
import { toBeValidAgErrorClass } from './matchers/toBeValidAgErrorClass';
import { toBeValidAgErrorObject } from './matchers/toBeValidAgErrorObject';
import { toBeValidAgErrorClassIndependentOfSourceName } from './matchers/toBeValidAgErrorClassIndependentOfSourceName';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
expect.extend({
    toBeValidAgErrorClass,
    toBeValidAgErrorObject,
    toBeValidAgErrorClassIndependentOfSourceName,
});
//# sourceMappingURL=index.js.map