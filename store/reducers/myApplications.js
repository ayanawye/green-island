import { BASE_URL } from "@/base_url/BASE_URL";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";

export const getMyApplications = createAsyncThunk(
  "myAppplications/getMyApplications",
  async ({ access, rejectedWithValue }) => {
    try {
      const resp = await axios.get(`${BASE_URL}/applications/`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
      if (resp.statusText !== "OK") {
        throw new Error("Произошла ошибка");
      }
      return resp.data;
    } catch (err) {
      console.log(rejectedWithValue(err.message));
    }
  }
);

export const createApplication = createAsyncThunk(
  "myAppplications/createApplication",
  async ({ access, values}, {rejectedWithValue }) => {
    try {
      const resp = await axios.post(`https://greenfinally.pythonanywhere.com/api/v1/client/application/create/`, values,
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      );
      if (resp.statusText !== "OK") {
        throw new Error("Произошла ошибка");
      }
      const data = await resp.data;
      dispatch(addTodo(data));
      message.open({
        type: "success",
        content: "Заявка создана",
        style: {
          marginTop: "100px"
        }
      })
    } catch (err) {
      console.log(rejectedWithValue(err.message));
    }
  }
);

const initialState = {
  myApplications: [],
  error: false,
  loading: false,
};

const myApplicationsSlicer = createSlice({
  name: "myAppplications",
  initialState,
  reducers: {
    addApplication(state, action) {
      state.myApplications.push(action.payload.values);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMyApplications.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getMyApplications.fulfilled, (state, action) => {
        state.myApplications = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(getMyApplications.rejected, (state) => {
        state.loading = true;
        state.error = false;
      });
  },
});
export const {addApplication} = myApplicationsSlicer.actions;

export default myApplicationsSlicer.reducer;
