// --------------- Env variables ------------------

/** Add env variable aliases here */
type ConfigProp = 'port' | 'nodeEnv';

/** Add env variable aliases here with type */
type Config = Record<ConfigProp, any> & {
  port: number | undefined;
  nodeEnv: string | undefined;
};

/** Add env variables here */
const localConfig: Readonly<Config> = {
  port: Number(process.env.PORT),
  nodeEnv: process.env.NODE_ENV,
};

// --------------- Access configs ------------------
/**
 * This shouldn't need to change
 *
 * If an env variable is missing, the program should crash
 */
function makeConfigGetter(aLocalConfig: Config) {
  return {
    get<T>(prop: ConfigProp): T {
      if (aLocalConfig[prop] !== undefined) {
        return aLocalConfig[prop];
      }
      throw new Error(`Missing environment variable: ${prop}`);
    },
  };
}

export default makeConfigGetter(localConfig);
