import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
  loading: null,
  total_count: null,
  total_pages: null,
  searchTerm: "",
  jobs: [],
  job: {},
};

export const getAllJobs = createAsyncThunk(
  "job/getAllJobs",
  async ({ page, searchTerm }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/jobs?page=${page}&term=${searchTerm}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getJobById = createAsyncThunk(
  "job/getJobById",
  async ({ id, cancelTokenSource }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/jobs/getById/${id}`, {
        cancelToken: cancelTokenSource.token,
      });
      return res.data.result;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: {
    [getAllJobs.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllJobs.rejected]: (state, action) => {
      console.log("error", action.payload);
      state.loading = false;
    },
    [getAllJobs.fulfilled]: (state, action) => {
      state.jobs = action.payload.result;
      state.total_count = action.payload.total_count;
      state.total_pages = action.payload.total_pages;
      state.loading = false;
    },
    [getJobById.fulfilled]: (state, action) => {
      state.job = action.payload;
    },
  },
});
export const { setSearchTerm } = jobSlice.actions;

export default jobSlice.reducer;
