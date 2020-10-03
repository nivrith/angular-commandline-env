declare global {
    /**
     * @description
     * Global commandline environment variables available to
     * devserver build at runtime
     *
     */
    export const APP_ENV: {
      /**
       * @description
       * Flag toggle ngrx runtime checks
       *
       * @usage
       * `$ yarn serve --no-runtimeChecks`
       *
       */
      runtimeChecks: boolean;

      /**
       * @description
       * Log exceptions to third party exception tracker (e.g. Sentry, Log Rocket)
       */
      logExceptions: boolean;

      /**
       * @description
       * Url to post exception logs
       * 
       */
      loggerUrl: string;
    };
  }

export const DEFAULT_APP_ENV: typeof APP_ENV = {
    runtimeChecks: true,
    logExceptions: false,
    loggerUrl: 'http://localhost:3000'
  };
