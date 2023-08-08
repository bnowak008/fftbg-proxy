import env from 'env-var';

const NODE_ENV = env.get('NODE_ENV').required().default('development').asEnum(['production', 'development']);

export const cors_origin = NODE_ENV === 'production' ? 'https://owkae0p4y5148yc7kd47tus4pbidjm.ext-twitch.tv' : '*';
