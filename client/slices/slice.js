import { createSlice, miniSerializeError } from '@reduxjs/toolkit'


const initialState = { 
    status:null,
    serviceType:null,
    loadType:null,
    scopeOfService:null,
    incoTerms:null,
    cargoType:null,
    status:null,
    date:null
}

export const navslice = createSlice({
  name: 'crm',
  initialState,
  reducers: {
    setServiceType: (state, action)=> {
      state.serviceType= action.payload;
    },
    setCurrentDate: (state, action)=> {
      state.date= action.payload.toISOString();
    },
    setStatus: (state, action)=> {
      state.status= action.payload;
    },
    setLoadType: (state, action)=> {
      state.loadType= action.payload;
    },
    setScopeOfService: (state, action)=> {
      state.scopeOfService= action.payload;
    },
    setIncoTerms: (state, action)=> {
      state.incoTerms= action.payload;
    },
    setCargoType: (state, action)=> {
      state.cargoType= action.payload;
    },
    },
});

// sending the data layer
export const { setServiceType, setLoadType, setScopeOfService, setIncoTerms, setCargoType, setStatus, setCurrentDate } = navslice.actions
  
// grabbing the data layer: SELECTORS

export const selectServiceType = (state) =>state.crm.serviceType
export const selectLoadType = (state) =>state.crm.loadType
export const selectScopeOfService = (state) =>state.crm.scopeOfService
export const selectIncoTerms = (state) =>state.crm.incoTerms
export const selectCargoType = (state) =>state.crm.cargoType
export const selectStatus = (state) =>state.crm.status
export const selectDate = (state) =>state.crm.date

export default navslice.reducer