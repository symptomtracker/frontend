// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Patientdata } from '../models/patientdata.model'

// Section 2
export const ADD_PATIENTDATA       = '[PATIENTDATA] Add'
// Section 3
export class AddPatientdata implements Action {
  readonly type = ADD_PATIENTDATA

  constructor(public payload: Patientdata) {}
}

// Section 4
export type Actions = AddPatientdata
