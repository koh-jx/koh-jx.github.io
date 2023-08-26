// Retrieved from https://stackoverflow.com/questions/58341787/intersectionobserver-with-react-hooks/67826055#67826055
// React Hook to check if an element is visible on screen
import { useEffect, useState, useRef } from 'react';

export default function useOnScreen(ref) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting)
    );
  }, []);

  useEffect(() => {
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}
