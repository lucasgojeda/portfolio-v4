/** This is the return of getEnvironments function */
export type EnvironmentVariables = {
  [key: string]: string | undefined
}

/** This solved a problem with env variables types */
interface ImportMeta {
  env: {
    // NODE_ENV: 'development' | 'production';
    email: string
    password: string
  }
}
