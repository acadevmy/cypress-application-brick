import { CypressRunnerConfig } from '@devmy/cypress-runner';

const config: CypressRunnerConfig = {
  debug: true,
  startWebServerCommands: [
{{#webServerCommands}}
  {{#items}}
    {
      command: '{{{value}}}',
      raw: false,
      cwd: '../..',
    },
  {{/items}}
{{/webServerCommands}}
  ],
  waitOn: {
    resources: [
{{#waitOnUrls}}
  {{#items}}
      '{{{value}}}',
  {{/items}}
{{/waitOnUrls}}
    ],
    strictSSL: false,
    timeout: 600000,
  },
};

export default config;
