const auth0 = new Auth0Client({
    domain: 'dev-q6h5a0w8qxc2k1hc.us.auth0.com',
    client_id: 'YCESb6rx61NiDzjSUIcV59kC4Y6zpkhb',
  });
  
  // Function to log in user
  const login = async () => {
    try {
      // Redirect user to Auth0 login page
      await auth0.loginWithRedirect();
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  

  // Function to log out user
  const logout = async () => {
    try {
      // Log out user
      await auth0.logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };