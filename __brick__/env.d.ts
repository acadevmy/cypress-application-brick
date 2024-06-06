/* eslint-disable no-var */
declare var process: {
  env: {
    {{applicationName.constantCase()}}_PROJECT_ID: string | null | undefined;
  };
};
