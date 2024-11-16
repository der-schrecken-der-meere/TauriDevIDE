import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Local Storage working directory key */
const LSWD_KEY = "working-directory";

const getWD = () => {
  return localStorage.getItem(LSWD_KEY);
}

/**
 * Sets the working directory in the local storage
 * @param wd string of the working directory
 * @returns if everything went right: null else an error message
 */
const setWD = (wd: string) => {
  try {
    localStorage.setItem(LSWD_KEY, wd);
    return null;
  } catch (_e) {
    const e: DOMException = _e as any;
    return e.message;
  }
}

/**
 * Returns a random number between two values
 * @param min inclusive
 * @param max inclusive
 */
const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Returns either the value or one of the extreme values
 * @param value number to check
 * @param min inclusive
 * @param max inclusive
 */
const numberBetween = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
}

export { 
  getWD,
  setWD,
  numberBetween,
  randomNumberBetween,
}