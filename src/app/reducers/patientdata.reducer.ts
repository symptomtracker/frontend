import { Action } from '@ngrx/store'
import * as PatientdataActions from '../actions/patientdata.actions'
import {Patientdata} from "../models/patientdata.model";

// Section 1
const initialState: Patientdata = {
  name: '',
  alter: 0,
  geschlecht: "",
  berufsfeld: "",
  menschenkontakt: ""
}

// Section 2
export function reducer(state: Patientdata[] = [initialState], action: PatientdataActions.Actions) {

  // Section 3
  switch(action.type) {
    case PatientdataActions.ADD_PATIENTDATA:
      return [...state, action.payload];
    default:
      return state;
  }
}
