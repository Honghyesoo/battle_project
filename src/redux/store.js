// store.js
import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

// 회원가입
export const join = createAsyncThunk("join", async (payload, thunkAPI) => {
  try {
    const response = await axios.post("http://localhost:3001/join", payload);
    return response.data;
  } catch (error) {
    console.error(error);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const joinSlice = createSlice({
  name: "join",
  initialState: {
    name: null,
    userid: null,
    password: null,
    birthday: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(join.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(join.fulfilled, (state, action) => {
        state.loading = false;
        state.name = action.payload.name;
        state.userid = action.payload.userid;
        state.password = action.payload.password;
        state.birthday = action.payload.birthday;
      })
      .addCase(join.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export const selectUser = (state) => state.join.user;
// export const selectLoading = (state) => state.join.loading;
// export const selectError = (state) => state.join.error;

const store = configureStore({
  reducer: {
    join: joinSlice.reducer,
  },
});

export default store;
