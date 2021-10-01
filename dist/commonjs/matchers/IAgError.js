"use strict";
// This is a work around to avoid a circular dependency:
// The matchers need to know the type of AgError from the ag-error module.
// However the ag-error module makes use of ag-error-jest
// This wouldn't be a bad dependency, since they require them along different
// workflows, but we'll just use a compatible interface for now.
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=IAgError.js.map