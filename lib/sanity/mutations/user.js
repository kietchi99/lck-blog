import SanityEditClient from '../clients/sanityEditClient';

export const createUser = (userData, accountProvider) => {
    return SanityEditClient.createIfNotExists({
        _id: userData.id,
        _type: 'user',
        name: userData.name,
        avatar: userData.image,
        email: userData.email,
        provider: accountProvider
    })
        .then((doc) => {
            console.log('new user created');
            console.log(doc);
        })
        .catch((err) => {
            console.log('💥💥 Error new user ');
            console.error(err);
            console.log(err);
        });
};

export const getUserById = (id) => SanityEditClient.getDocument(id);