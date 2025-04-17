import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function copyLink(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true
  } catch (error) {
    console.error("Copy text failed:", error);
    return false
  }
}