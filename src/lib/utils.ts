import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

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

dayjs.extend(relativeTime);

export const timeAgo = (timestamp: Date) => {
    const now = dayjs();
    const time = dayjs(timestamp);
  
    const diffInSeconds = now.diff(time, 'second');
  
    if (diffInSeconds < 30) return 'just now';
    return time.fromNow();
  };
  