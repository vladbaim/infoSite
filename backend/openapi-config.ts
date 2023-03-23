import { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: './swagger-spec.json',
  apiFile: '../api/api.empty.ts',
  apiImport: 'emptySplitApi',
  outputFile: '../common/api.generated.ts',
  exportName: 'generatedApi',
  hooks: false
};

export default config;
