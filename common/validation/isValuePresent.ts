export const isValuePresent = (val: any, nullable?: boolean) => val !== undefined && (!!nullable || val !== null);
