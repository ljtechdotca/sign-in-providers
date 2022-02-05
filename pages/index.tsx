import { useAuth0 } from "@auth0/auth0-react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { user, logout, loginWithRedirect, isAuthenticated, isLoading } =
    useAuth0();
  return (
    <div>
      {isLoading ? (
        "LOADING"
      ) : (
        <div>
          {isAuthenticated ? (
            <button onClick={() => logout()}>Sign Out</button>
          ) : (
            <button onClick={() => loginWithRedirect()}>Sign In</button>
          )}
        </div>
      )}
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default Home;
