import env from 'env-var';

const NODE_ENV = env.get('NODE_ENV').required().default('development').asEnum(['production', 'development']);

export const PORT = env.get('FFTBG_PORT').required().default(3003).asPortNumber();
export const CORS_ORIGIN = NODE_ENV === 'production' ? 'https://owkae0p4y5148yc7kd47tus4pbidjm.ext-twitch.tv' : '*';
