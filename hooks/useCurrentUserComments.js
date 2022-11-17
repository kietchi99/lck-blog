//swr
import useSWR from 'swr/immutable';

//react
import { useCallback, useMemo } from 'react';

//hooks
import useCurrentUser from './useCurrentUser';

//sanity
import { getCurrentUserComments } from 'lib/sanity/queries/comments';
import SanityCDNReadClient from 'lib/sanity/clients/SanityCDNReadClient';

const sanityFetcher = (query) => SanityCDNReadClient.fetch(query);

const useCurrentUserComments = ({ blogId }) => {
  const { currentUser } = useCurrentUser();
  const currentUserId = useMemo(() => {
    if (!currentUser) return undefined;

    return currentUser._id;
  }, [currentUser]);


  const getKey = useCallback(() => {
    if (!currentUserId) return undefined;
    if (!blogId) return undefined;

    return getCurrentUserComments({ blogId, currentUserId });
  }, [blogId, currentUserId]);

  const { data, error, mutate } = useSWR(
    getKey,
    sanityFetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  console.log('data', data)

  const comments = useMemo(() => {
    if (!data) return [];

    return data;
  }, [data]);

  const loading = useMemo(
    () => !data && !error,
    [data, error]
  );

  const addComment = (comment) => {
    if (!comment) return;

    mutate((comments) => [comment, ...comments], false);
  };

  const deleteComment = (commentId) => {
    if (!commentId) return;

    if (!comments.length) return;

    console.log(comments, commentId);
    mutate(
      (comments) =>
        comments.filter(
          (comment) => comment._id !== commentId
        ),
      false
    );
  };

  return {
    comments: comments || [],
    loading,
    error,
    addComment,
    deleteComment,
  };
};

export default useCurrentUserComments;