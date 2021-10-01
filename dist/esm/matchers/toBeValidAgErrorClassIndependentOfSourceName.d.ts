import { IAgError } from './IAgError';
export declare function toBeValidAgErrorClassIndependentOfSourceName(ReceivedClass: IAgError): {
    message: () => string;
    pass: boolean;
};
