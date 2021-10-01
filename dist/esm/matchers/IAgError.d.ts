export interface IAgError extends Error {
    new (message?: string): IAgError;
    name: string;
    hierarchicalName: string;
}
