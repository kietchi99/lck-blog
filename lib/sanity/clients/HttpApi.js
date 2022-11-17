//axios
import axios from 'axios';

export const HttpApiMutate = (mutations = [], params) => {
  return axios.post(
    `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.SANITY_DATASET_NAME}`,
    { mutations },
    {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${process.env.SANITY_EDITOR_TOKEN}`,
      },
      params,
    }
  );
};