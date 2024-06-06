import { CypressRunnerConfig } from '@devmy/cypress-runner';

const config: CypressRunnerConfig = {
  debug: true,
  startWebServerCommands: [
    {{#webServerCommands}}
    {
      command: '{{.}}',
      raw: false,
      cwd: '../..',
    },
   {{/webServerCommands}}
  ],
  waitOn: {
    resources: [
      {{#waitOnUrls}}
      '{{.}}',
      {{/waitOnUrls}}
    ],
    strictSSL: false,
    timeout: 600000,
  },
};

export default config;
