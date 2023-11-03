import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "userAPI",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["User"],
  endpoints: (builder) => {
    return {
      //
    };
  },
});
