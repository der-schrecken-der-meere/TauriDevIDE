import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const getWD = () => {
  const key = localStorage.getItem("working-directory");
  if (!key) return false;
  return key;
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

export { getWD, randomNumberBetween, numberBetween }