import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import getCrashes from "../api/crashApi";
import {
  setCurrentYearFatalityTotals,
  setOpenDataPhillyCrashes,
  setPenndotCrashes,
  setPreviousYearToDateFatalityTotals,
} from "../slices/dataSlice";
import { Crash, FatalityTotals } from "../types";

let emptyTotals = {
  pedestrian: 0,
  cyclist: 0,
  motorcyclist: 0,
  motorist: 0,
  total: 0,
};
function getYearCrashTotals(targetDate: Date, crashes: Crash[]) {
  const totals = {
    pedestrian: 0,
    cyclist: 0,
    motorcyclist: 0,
    motorist: 0,
    total: 0,
  };

  targetDate.setHours(0, 0, 0, 0)

  crashes.forEach((crash) => {
    const crashDate = new Date(crash.date);
    crashDate.setHours(0, 0, 0, 0)

    if (crash.year !== targetDate.getFullYear()) {
      return;
    }

    if (crashDate >= targetDate) {
      return;
    }

    if (crash.pedestrian_fatality_count > 0) {
      totals.pedestrian += 1;
    }
    if (crash.cyclist_fatality_count > 0) {
      totals.cyclist += 1;
    }
    if (crash.motorcyclist_fatality_count > 0) {
      totals.motorcyclist += 1;
    }
    if (crash.motorist_fatality_count > 0) {
      totals.motorist += 1;
    }

    // totals.pedestrian += crash.pedestrian_fatality_count;
    // totals.cyclist += crash.cyclist_fatality_count;
    // totals.motorcyclist += crash.motorcyclist_fatality_count;
    // totals.motorist += crash.motorist_fatality_count;
  });
  totals.total =
    totals.pedestrian + totals.cyclist + totals.motorcyclist + totals.motorist;
  return totals;
}

export const loadOpenDataPhilly =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    const targetDate = new Date()
    targetDate.setDate(1)
    const crashes = await getCrashes("opendataphilly", "2019", targetDate.getFullYear().toString());
    const totals = getYearCrashTotals(targetDate, crashes);
    dispatch(setCurrentYearFatalityTotals(totals));
    dispatch(setOpenDataPhillyCrashes(crashes));
  };

export const loadPenndot =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    const crashes = await getCrashes("penndot", "2002", "2022");
    const targetDate = new Date()
    targetDate.setFullYear(targetDate.getFullYear() - 1)
    targetDate.setDate(1)
    const totals = getYearCrashTotals(
      targetDate,
      crashes,
    );
    dispatch(setPreviousYearToDateFatalityTotals(totals));
    dispatch(setPenndotCrashes(crashes));
  };
