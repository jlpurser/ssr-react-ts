// --------------- Env variables ------------------

/** Add env variable aliases here with type */
type Config = {
  port: number | undefined;
  nodeEnv: string | undefined;
  clients: string[] | undefined;
};

/** Add env variables here */
const localConfig: Readonly<Config> = {
  port: Number(process.env.PORT),
  nodeEnv: process.env.NODE_ENV,
  clients: JSON.parse(process.env.CLIENTS || 'undefined'),
};

// --------------- Access configs ------------------
/**
 * This IIFE shouldn't need to change
 *
 * If an env variable is missing, the program should crash
 */
export default ((config: Config) =>
  Object.freeze({
    get(prop: keyof Config): any {
      if (config[prop]) {
        return config[prop];
      }
      throw new Error(`Missing environment variable: ${prop}`);
    },
  }))(localConfig);
