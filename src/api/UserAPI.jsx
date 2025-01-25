// import { useState, useEffect } from "react";
// import axios from "axios";
// import jwtDecode from 'jwt-decode'

// // let jwtDecode; // Declare a variable for dynamic import

// const isTokenExpired = async (token) => {
//   if (!token) return true;

//   // Dynamically import jwt-decode
// //   if (!jwtDecode) {
// //     const module = await import("jwt-decode");
// //     // jwtDecode = module.default; // Use the default export from jwt-decode
// //   }

//   const { exp } = jwtDecode(token); // Use jwtDecode here
//   return Date.now() >= exp * 1000;
// };

// const refreshAccessToken = async (refreshToken) => {
//   try {
//     const response = await axios.post(
//       "http://localhost:8000/api/v1/users/refresh-token",
//       {
//         refreshToken,
//       }
//     );
//     return response.data.accessToken;
//   } catch (error) {
//     console.error("Failed to refresh token:", error.response || error.message);
//     return null;
//   }
// };

// const UserAPI = (token, refreshToken) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     const initializeUser = async () => {
//       if (token) {
//         try {
//           if (await isTokenExpired(token)) {
//             const newAccessToken = await refreshAccessToken(refreshToken);
//             if (!newAccessToken) {
//               setIsLoggedIn(false);
//               return;
//             }
//             localStorage.setItem("accessToken", newAccessToken);
//             token = newAccessToken; // Update the token locally
//           }

//           const res = await axios.get(
//             "http://localhost:8000/api/v1/users/current-user",
//             {
//               headers: { Authorization: `Bearer ${token}` },
//               withCredentials: true,
//             }
//           );
//           setIsLoggedIn(true);
//           setIsAdmin(res.data.role === "admin");
//         } catch (err) {
//           console.error("Failed to fetch user information:", err);
//         }
//       }
//     };

//     initializeUser();
//   }, [token, refreshToken]);

//   return {
//     isLoggedIn: [isLoggedIn, setIsLoggedIn],
//     isAdmin: [isAdmin, setIsAdmin],
//   };
// };

// export default UserAPI;
