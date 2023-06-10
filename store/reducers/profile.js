import { BASE_URL } from "@/base_url/BASE_URL";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProfile = createAsyncThunk(
  "profile/getAllApplications",
  async ({access, rejectedWithValue }) => {
    try {
      const resp = await axios.get(
        `${BASE_URL}/client-profile/profile/`,
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
)

const initialState = {
  profile: {},
  error: false,
  loading: false,
}

const profileSlicer = createSlice({
  name: "profile",
  initialState,
  extraReducers(builder) {
    builder
    .addCase(getProfile.pending, (state) => {
      state.loading = true; 
      state.error = false;
    })
    .addCase(getProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
      state.loading = false;
      state.error = false;
    })
    .addCase(getProfile.rejected, (state) => {
      state.loading = true; 
      state.error = false;
    })
  },
})                     

export default profileSlicer.reducer;