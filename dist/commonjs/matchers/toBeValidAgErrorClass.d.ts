import { IAgError } from './IAgError';
export declare function toBeValidAgErrorClass(ReceivedClass: IAgError, name: string, hierarchicalName: string): {
    message: () => string;
    pass: boolean;
};
