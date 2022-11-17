import SanityClient from '../config';

const SanityCDNReadClient = SanityClient.withConfig({
  useCdn: process.env.NODE_ENV == 'production',
});

export default SanityCDNReadClient;