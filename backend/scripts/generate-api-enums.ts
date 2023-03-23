import fs = require('fs');
import { capitalizeFirstLetter } from '../../common/utils/capitalizeFirstLetter';

const swaggerJson = fs.readFileSync('swagger-spec.json', 'utf8');

const swagger = JSON.parse(swaggerJson);

let result = '/* This file was automatically generated */\n// eslint-disable\n// tslint:disable\n// @ts-nocheck\n\n';

result += 'export enum AppUrlsEnum {\n';
const resources: string[] = [];
Object.keys(swagger.paths).forEach((path) => {
  const methods = swagger.paths[path];
  const splitPath = path.split('/');
  if (!resources.includes(splitPath[1])) {
    resources.push(splitPath[1]);
  }
  Object.keys(methods).forEach((method) => {
    const methodInfo = methods[method];
    const operationId = methodInfo.operationId;
    const splitOperationId = operationId.split('_');
    splitOperationId.push(method);
    const formattedOperationId = splitOperationId.map((piece: string) => capitalizeFirstLetter(piece));
    const readyOperationId = formattedOperationId.join('');
    result += `    ${readyOperationId} = '${path}',\n`;
  });
});

result += '}\n\n';

result += 'export enum ResourcesEnum {\n';
resources.forEach((resource) => {
  const splitResource = resource.split('-');
  const formattedResource = splitResource.map((piece: string) => capitalizeFirstLetter(piece));
  result += `    ${formattedResource.join('')} = '${resource}',\n`;
});
result += '}\n';

fs.writeFileSync('../common/api.enum.ts', result);
