const {
  REACT_APP_VERSION = '',
  REACT_APP_NAME = '',
} = process.env;

export default {
  app: {
    version: REACT_APP_VERSION,
    name: REACT_APP_NAME,
  },
} as const;
