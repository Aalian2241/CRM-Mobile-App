import { createSlice, miniSerializeError } from '@reduxjs/toolkit'


const initialState = { 
    allJobs:null,
    jobNo:null,
    origin:null,
    destination:null,
    travelTimeInformation:null,
    progress:false,
    vehicleId:null,
    loadType:null,
    jobStatus:null,
    start_date:null,
    end_date:null,
    transporter:null,
    location:null,
    description:null,
    invoiceURI:null,
    invoiceSig:null,
    

}

export const slice = createSlice({
  name: 'crm',
  initialState,
  reducers: {
    setOrigin: (state, action)=> {
      state.origin= action.payload;
    }
    
  },
});

// sending the data layer
export const { setEndDate } = slice.actions
  
// grabbing the data layer: SELECTORS
export const selectInvoiceURI = (state) =>state.crm.invoiceURI

export default slice.reducer