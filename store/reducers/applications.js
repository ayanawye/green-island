import { BASE_URL } from "@/base_url/BASE_URL";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllApplications = createAsyncThunk(
  "applications/getAllApplications",
  async ({access, rejectedWithValue }) => {
    try {
      const resp = await axios.get(
        `${BASE_URL}/all_applications/`,
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      );
      if (resp.statusText !== "OK") {
        throw new Error("Произошла ошибка");
      }
      return resp.data;
    } catch (err) {
      console.log(rejectedWithValue(err.message));
    }
  }
);

const initialState = {
  applications: [],
  error: false,
  loading: false,
};

const applicationsSlicer = createSlice({
  name: "applications",
  initialState,
  extraReducers(builder) {
    builder
    .addCase(getAllApplications.pending, (state) => {
      state.loading = true; 
      state.error = false;
    })
    .addCase(getAllApplications.fulfilled, (state, action) => {
      state.applications = action.payload;
      state.loading = false;
      state.error = false;
    })
    .addCase(getAllApplications.rejected, (state) => {
      state.loading = true; 
      state.error = false;
    })
  },
});

export default applicationsSlicer.reducer;
