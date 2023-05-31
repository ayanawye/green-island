import { useEffect } from "react";
 
export const setLocalStorageItem = (key, value) => {
  JSON.stringify(localStorage.setItem(key, value))
}