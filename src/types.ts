// https://stackoverflow.com/questions/57132428/augmentations-for-the-global-scope-can-only-be-directly-nested-in-external-modul
export {};

// @see https://jestjs.io/docs/expect#expectextendmatchers
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R> {
      /**
       * Test that a subclass of AgError meets the requirements to be a valid
       * subclass of AgError. It doesn't test the actions of the error, rather
       * this is for avoiding accidental typos by requiring double data-entry.
       *
       * More specifically, for a subclass of AgError is to valid there are two
       * requirements:
       *
       * Firstly objects of the class have the expected values for their name
       * and hierarchicalName properties.
       *
       * Secondly the value of name is not dependent on the source class (i.e
       * constructor.name). The motivation for the final requirement is to
       * ensure the error information will work even if the code is minified or
       * obsfucated.
       *
       * The toBeValidAgErrorClass() matcher combines the output of the
       * toBeValidAgErrorObject() and
       * toBeValidAgErrorClassIndependentOfSourceName() matchers
       *
       * @example
       * ```
       * expect(ClientError).toBeValidAgErrorClass(
       *  'ClientError',
       *  'AgError:NameOfTheAppError:ClientError'
       * );
       * ```
       *
       * @param name - The class name name of the error, which the value
       * of/returned by the name property/getter of an instance should equal.
       *
       * @param hierarchicalName - The full hierachical name of the error, which
       * the value of/returned by the hierarchicalName property/getter of an
       * instance should equal.
       *
       */
      toBeValidAgErrorClass(name: string, hierarchicalName: string): R;

      /**
       * Test that a given AgError object meets the requirement of having
       * expected values for their name and hierarchicalName properties.
       *
       * In most cases the toBeValidAgErrorClass() matcher should be used
       * instead, since it does this same as toBeValidAgErrorObject() but also
       * toBeValidAgErrorClassIndependentOfSourceName()
       *
       * @example
       * ```
       * const err = new ClientError('some message');
       * expect(err).toBeValidAgErrorObject(
       *  'ClientError',
       *  'AgError:NameOfTheAppError:ClientError'
       * );
       * ```
       *
       * @param  name - The class name name of the error, which the value
       * of/returned by the name property/getter of an instance should equal.
       *
       * @param  hierarchicalName - The full hierachical name of the error,
       * which the value of/returned by the hierarchicalName property/getter of
       * an instance should equal.
       */
      toBeValidAgErrorObject(name: string, hierarchicalName: string): R;

      /**
       * Test that a instances of the given subclass of AgError meet the
       * requirement that the value of their name property/getter is not
       * dependent on the source class (i.e constructor.name). The motivation is
       * to ensure the error information will work even if the code is minified
       * or obsfucated.
       *
       * NOTE: Will not work if the subclass has extra constructor arguments.
       *
       * In most cases the toBeValidAgErrorClass() matcher should be used
       * instead, since it does this same as
       * toBeValidAgErrorClassIndependentOfSourceName() but also
       * toBeValidAgErrorObject()
       *
       * @example
       * ```
       * expect(ClientError).toBeValidAgErrorClassIndependentOfSourceName();
       * ```
       */
      toBeValidAgErrorClassIndependentOfSourceName(): R;
    }
  }
}
