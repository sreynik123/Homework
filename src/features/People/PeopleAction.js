import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPeople = createAsyncThunk('/people/fetch',
   async () => {
  try {
    let response = await fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=aacdbe83dedab8fc913bd72adf3fdbad`
    );


   
    return response.json();
  } catch (error) {
    return Promise.reject(error);
  }
});
