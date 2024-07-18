// lib/withAuth.js
import { useRouter } from "next/router";
import { useEffect } from "react";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      // Check if we're on the client-side
      if (typeof window !== "undefined") {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          // Check if the user is not logged in and not already on the /auth page
          if (!user && router.pathname !== "/auth") {
            router.replace("/auth");
          }
        });

        return () => unsubscribe();
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
