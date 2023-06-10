import { BASE_URL } from "@/base_url/BASE_URL";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBrigadeList = createAsyncThunk(
  "brigade/getBrigadeList",
  async ({access, rejectedWithValue }) => {
    try {
      const resp = await axios.get(
        `${BASE_URL}/brigades/`,
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
  brigade: [],
  error: false,
  loading: false,
};

const brigadeList = createSlice({
  name: "brigade",
  initialState,
  extraReducers(builder) {
    builder
    .addCase(getBrigadeList.pending, (state) => {
      state.loading = true; 
      state.error = false;
    })
    .addCase(getBrigadeList.fulfilled, (state, action) => {
      state.brigades = action.payload;
      state.loading = false;
      state.error = false;
    })
    .addCase(getBrigadeList.rejected, (state) => {
      state.loading = true; 
      state.error = false;
    })
  },
});

export default brigadeList.reducer;