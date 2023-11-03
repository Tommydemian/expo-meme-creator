import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { FIREBASE_AUTH } from "../firebaseConfig";

// Define the types for the response and the arguments
type LoginResponse = {
  user: any; // Replace 'any' with the correct user type according to your needs
  status: "fulfilled" | "rejected";
  error?: string;
};

type LoginArgs = {
  email: string;
  password: string;
};

// Initialize the Firebase auth instance
const auth = FIREBASE_AUTH;

// Define the apiSlice
export const userApi = createApi({
  reducerPath: "userAPI",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    loginUser: builder.mutation<LoginResponse, LoginArgs>({
      queryFn: async ({ email, password }) => {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password,
          );
          // Signed in
          const user = userCredential.user;
          const userData = {
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            displayName: user.displayName,
            photoURL: user.photoURL,
          };
          alert(userData);
          return { data: { user: userData, status: "fulfilled" } };
        } catch (err) {
          const error = err as Error;
          // Return the error message and a rejected status
          alert(`Sign in failed" ${error.message}`);
          return { error: { status: "rejected", data: error.message } };
        }
      },
    }),
    registerUser: builder.mutation<LoginResponse, LoginArgs>({
      queryFn: async ({ email, password }) => {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
          );
          // Signed in
          const user = userCredential.user;
          // Return the user and the status
          alert("check your Email dude");
          const userData = {
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            displayName: user.displayName,
            photoURL: user.photoURL,
          };
          return { data: { user: userData, status: "fulfilled" } };
        } catch (err) {
          const error = err as Error;
          // Return the error message and a rejected status
          alert(error.message);
          return { error: { status: "rejected", data: error.message } };
        }
      },
    }),
  }),
});

// Export the auto-generated hook for the loginUser mutation
export const { useLoginUserMutation, useRegisterUserMutation } = userApi;
