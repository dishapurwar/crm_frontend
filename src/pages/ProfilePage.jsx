import { useContext, useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

import AccountNav from "../AccountNav";
import Tilt from 'react-parallax-tilt';
import '../App.css'


export default function ProfilePage() {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser, isAdmin } = useContext(UserContext);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
  }

  useEffect(() => {
    if (!user) {
      axios.get('/profile').then(({ data }) => {
        console.log("User object from server:", data);
        setUser(data);
        setRedirect(null); // Reset redirect state
      });
    }
  }, [user, setUser]);

  // Move the logout function declaration outside of the useEffect
  async function logout() {
    try {
      await axios.post('/logout');
      console.log("Logging out...");
      setUser(null);
      console.log("User set to null:", user);
      setRedirect('/');
    } catch (error) {
      console.error('Error during logout:', error);
      // Handle the error as needed, e.g., show a message to the user
    }
  }
  

  if (!ready) {
    return 'Loading...';
  }

  if (ready && !user && !redirect) {
    return <Navigate to={'/login'} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      <AccountNav />
      <div className="App bg-black h-screen w-screen relative overflow-hidden flex justify-center items-center">
        <Tilt>
          <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm overflow-hidden">
            <div className="justify-center items-center h-screen">
              {subpage === 'profile' && (
                <div className="bg-black shadow-md rounded-md p-8 max-w-2xl w-full  flex flex-col items-center justify-center">
                  <div className="text-center mb-6">
                    <div className="bg-white  rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 via-yellow-500 from-purple-500 to-red-500 text-transparent bg-clip-text text-sm">
                        {isAdmin
                          ? user.userName && user.userName.charAt(0).toUpperCase()
                          : user.name && user.name.charAt(0).toUpperCase()}
                      </h1>
                    </div>
                    <div className="text-center mb-6">
                      {isAdmin ? (
                        <>
                          <div className="mt-2">
                            <p className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 via-yellow-500 from-purple-500 to-red-500 text-transparent bg-clip-text text-sm">
                              Admin Username: {user.userName}<br />
                              {/* Uncomment the line below if you want to display the admin password */}
                              {/* Admin Password: {user.adminPassword} */}
                            </p>
                          </div>
                        </>
                      ) : (
                        <p className="text-xl font-semibold text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 via-yellow-500 from-purple-500 to-red-500 text-transparent bg-clip-text text-sm">
                          Logged in as {user.name} ({user.email})
                        </p>
                      )}
                    </div>

                  </div>
                  <button
                    onClick={logout}
                    className="w-full font-bold py-3 px-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text bg-black text-xl"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </Tilt>
      
      </div>
    </div>
  )
}

