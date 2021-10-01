import { IAgError } from './IAgError';

// Not a normal sort of test, but basically want to ensure the way we've done
// this doesn't actually end up using the class name even if minified. We can
// (sort of) emulate this by deliberately breaking our own rules using a name
// that does not match the class to make sure the correct one is being used.
export function toBeValidAgErrorClassIndependentOfSourceName(
  ReceivedClass: IAgError,
) {
  if (this.isNot) {
    throw new Error('toBeValidAgErrorClassIndependentOfSourceName() is not compatible with the .not modifier');
  }

  let message = '';
  let pass = true;

  class DummySubClass extends ReceivedClass {
    static errorName = 'NotTheSame';
  }
  const dummyErr = new DummySubClass();

  pass = !this.equals(dummyErr.name, dummyErr.constructor.name);
  if (!pass) message += 'Expected instances of the class to have a name property/getter that is not reliant on the original class name (i.e works even if minified)';

  return {
    message: () => message,
    pass,
  };
}
