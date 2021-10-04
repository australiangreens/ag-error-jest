# ag-error-jest

Provides jest matchers to simplify testing of subclasses of AgErrors from the
ag-error package. See the ag-error readme for more detail about AgErrors
themselves.

## Installation

TODO: At time of writing we are using private git repositories, not npm

## Setup

Making use of the package once installs works in the same way as
[jest-extended](https://github.com/jest-community/jest-extended), relying on
side-effects. Add `ag-error-jest` to your jest `setupFilesAfterEnv`
configuration property. See [the jest
docs](https://jestjs.io/docs/configuration) for details

For example in `jest.config.js`:

```js
export default {
  //...
  "setupFilesAfterEnv": ["ag-error-jest"],
  //...
}
```

Alternatively if you already have a `./src/setupTests.ts` in your
`setupFilesAfterEnv`, then you and add an import into that intead:

```ts
import 'ag-error-test';
```

## Usage

So your test files for each error only needs to be something like:

```ts
import { BoilerplateError } from './BoilerplateError';

test('BoilerplateError meets requirements to be a valid AgError', () => {
  expect(BoilerplateError).toBeValidAgErrorClass(
    'BoilerplateError',
    'AgError:BoilerplateError',
  );
});
```

## Caveat: Different constructor signature

If you add extra arguments to the constructor, the `toBeValidAgErrorClass()`
matcher may not work. In this case you should should be able to use
`toBeValidAgErrorObject()` which checks the first two requirements, but will
need to manually test the first.

The following example shows a test for a special CiviApiAxiosError error that is
a wrapper for axios related errors.

```ts
import { CiviApiAxiosError } from './CiviApiAxiosError';
import { createAxiosError } from '../../../utils/testing';

test('CiviApiAxiosError meets requirements to be a valid AgError', () => {
  const err = new CiviApiAxiosError('some message', createAxiosError('Network Error', {}, null, {}, null));
  expect(err).toBeValidAgErrorObject('CiviApiAxiosError', 'AgError:BoilerplateError:CiviApiError:CiviApiAxiosError');

  // This is the bit we have to do manually.
  // Not a normal sort of test, but basically want to ensure the way we've done
  // this doesn't actually end up using the class name even if minified. We can
  // (sort of) emulate this by deliberately breaking our own rules using a name
  // that does not match the class to make sure the correct one is being used.
  class DummySubClass extends CiviApiAxiosError {
    static errorName = 'NotTheSame';
  }
  const dummy = new DummySubClass('some message', createAxiosError('Network Error', {}, null, {}, null));

  expect(dummy.name).not.toEqual(dummy.constructor.name);
});
```

## About the build process

TODO
