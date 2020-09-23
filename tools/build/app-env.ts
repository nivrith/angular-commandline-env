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
    };
  }

export const DEFAULT_APP_ENV: typeof APP_ENV = {
    runtimeChecks: true,
  };
