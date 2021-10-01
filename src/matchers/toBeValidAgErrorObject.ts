import { IAgError } from './IAgError';

export function toBeValidAgErrorObject(
  errObj: IAgError,
  name: string,
  hierarchicalName: string,
) {
  if (this.isNot) {
    throw new Error('toBeValidAgErrorObject() is not compatible with the .not modifier');
  }

  let msg = '';

  const passName = this.equals(errObj.name, name);
  if (!passName) msg += `Expected instances of the class to have name property/getter value equal to '${name}'. `;

  const passHierarchicalName = this.equals(errObj.hierarchicalName, hierarchicalName);
  if (!passHierarchicalName) msg += `Expected instances of the class to have hierarchicalName property/getter value equal to '${hierarchicalName}'. `;

  return {
    message: () => msg,
    pass: passName && passHierarchicalName,
  };
}
