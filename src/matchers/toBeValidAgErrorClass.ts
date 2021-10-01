import { IAgError } from './IAgError';
import { toBeValidAgErrorObject } from './toBeValidAgErrorObject';
import { toBeValidAgErrorClassIndependentOfSourceName } from './toBeValidAgErrorClassIndependentOfSourceName';

export function toBeValidAgErrorClass(
  ReceivedClass: IAgError,
  name: string,
  hierarchicalName: string,
) {
  if (this.isNot) {
    throw new Error('toBeValidAgErrorClass() is not compatible with the .not modifier');
  }

  let message = '';
  let pass = true;

  // First test an instance has correct name and hierachicalName
  const err = new ReceivedClass();
  const objectTestResult = toBeValidAgErrorObject.bind(this)(err, name, hierarchicalName);
  message += objectTestResult.message();
  pass = pass && objectTestResult.pass;

  // Secondly test that the name of instances is independent of the class name
  // (constructor.name) in the original source
  const relianceTestResult = toBeValidAgErrorClassIndependentOfSourceName.bind(this)(ReceivedClass);
  message += relianceTestResult.message();
  pass = pass && relianceTestResult.pass;

  return {
    message: () => message,
    pass,
  };
}
