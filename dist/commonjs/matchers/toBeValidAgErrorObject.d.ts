import { IAgError } from './IAgError';
export declare function toBeValidAgErrorObject(errObj: IAgError, name: string, hierarchicalName: string): {
    message: () => string;
    pass: any;
};
