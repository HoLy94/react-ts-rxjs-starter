import {useState, useEffect, useMemo, useCallback} from 'react';

const useFetch = (url: string, options: any) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasError, setHasError] = useState(false);
  const abortController = useMemo(() => new AbortController(), []);
  const {signal} = abortController;

  const request = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(url, options);
      const json = await response.json();

      if (!signal.aborted) {
        setData(json);
      }
    } catch (e) {
      if (!signal.aborted) {
        setHasError(true);
        setError(e);
      }
    } finally {
      if (!signal.aborted) {
        setLoading(false);
      }
    }
  }, [url, options, signal]);

  useEffect(() => {
    request();

    return () => {
      abortController.abort();
    };
  }, [abortController, request]);

  return {data, loading, hasError, error};
};

export default useFetch;
