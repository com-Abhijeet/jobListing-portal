import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { JOB_API_END_POINT } from '@/utils/constant';

export const fetchAppliedJobs = createAsyncThunk(
  'job/fetchAppliedJobs',
  async () => {
    const response = await axios.get(`${JOB_API_END_POINT}/apply/:jobId`); // Replace with your API endpoint
    return response.data;
  }
);

const jobSlice = createSlice({
  name: 'job',
  initialState: {
    allJobs: [],
    allAdminJobs: [],
    singleJob: null,
    searchJobByText: '',
    allAppliedJobs: [],
    searchedQuery: '',
    appliedJobs: [],
    savedJobs: [],
  },
  searchedQuery: {
    Location: '',
    Industry: '',
    Salary: '',
  },
  savedJobs: [],
  reducers: {
    // actions
    setJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
    setAllAdminJobs: (state, action) => {
      state.allAdminJobs = action.payload;
    },
    setSearchJobByText: (state, action) => {
      state.searchJobByText = action.payload;
    },
    setAllAppliedJobs: (state, action) => {
      state.allAppliedJobs = action.payload;
    },
    setSearchedQuery: (state, action) => {
      state.searchedQuery = action.payload;
    },
    extraReducers: (builder) => {
      builder.addCase(fetchAppliedJobs.fulfilled, (state, action) => {
        state.appliedJobs = action.payload;
      });
    },
    saveJobForLater: (state, action) => {
      const jobId = action.payload;
      if (!state.savedJobs.includes(jobId)) {
        state.savedJobs.push(jobId); // Add the job ID to savedJobs
      }
    },
  },
});
export const {
  setJobs,
  setAllJobs,
  setSingleJob,
  setAllAdminJobs,
  setSearchJobByText,
  setAllAppliedJobs,
  setSearchedQuery,
  saveJobForLater,
} = jobSlice.actions;
export default jobSlice.reducer;
