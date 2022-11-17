// swr
import useSWRInfinite from 'swr/infinite';

//react
import { useMemo, useCallback } from 'react';

const fetcher = url => fetch(url).then(res => res.json())

const useBlogComments = (blogId) => {  
  const getKey = useCallback(
    (pageIndex, previousPageData) => {
      if (pageIndex === 0 ) return `/api/blogs/comments?blogId=${blogId}`
      if (previousPageData && !previousPageData.length) return null;
      return `/api/blogs/comments?offset=${pageIndex * 1}&&blogId=${blogId}`
    },
    [blogId]
  );
  const { data, error, mutate, size, setSize } =
    useSWRInfinite(
      getKey,
      fetcher
    );

  const commentsPages = useMemo(() => data || [], [data]);
  
  const isLoadingInitialData = useMemo(
    () => !data && !error,
    [data, error]
  );

  const isEmpty = useMemo(
    () => data?.[0]?.length === 0,
    [data]
  );

  const isReachingEnd = useMemo(
    () =>
      isEmpty ||
      (data &&
        data[data.length - 1]?.length < 1),
    [isEmpty, data]
  );

  const isLoadingMore = useMemo(() => {
    return (
      isLoadingInitialData ||
      (size > 0 && data && typeof data[size - 1] === 'undefined')
    );
  }, [isLoadingInitialData, size, data]);
  console.log('test mutate', data)
  return {
    commentsPages,
    error,
    mutate,
    size,
    setSize,
    isLoadingMore,
    isReachingEnd,
  };
};

export default useBlogComments;