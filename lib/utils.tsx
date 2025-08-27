import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * A utility function to merge Tailwind CSS class names
 * - clsx handles conditional classes
 * - tailwind-merge makes sure conflicting Tailwind classes are resolved correctly
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}