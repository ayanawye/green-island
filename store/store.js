import {configureStore} from '@reduxjs/toolkit';
import applications from './reducers/applications';
import myApplications from './reducers/myApplications';
import brigadeList from './reducers/brigadeList';
import profile from './reducers/profile';

const store = configureStore({
  reducer: {
    applications,
    myApplications,
    brigadeList,
    profile,
  }
})

export default store