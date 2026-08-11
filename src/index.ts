import './types';
import { toBeValidAgErrorClass } from './matchers/toBeValidAgErrorClass';
import { toBeValidAgErrorObject } from './matchers/toBeValidAgErrorObject';
import { toBeValidAgErrorClassIndependentOfSourceName } from './matchers/toBeValidAgErrorClassIndependentOfSourceName';

expect.extend({
  toBeValidAgErrorClass,
  toBeValidAgErrorObject,
  toBeValidAgErrorClassIndependentOfSourceName,
});
