import SanityClient from '../config';

const SanityEditClient = SanityClient.withConfig({
    token: process.env.SANITY_EDITOR_TOKEN,
    useCdn: false,
});

export default SanityEditClient;