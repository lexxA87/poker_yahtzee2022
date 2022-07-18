import create from "zustand";
import configData from "../config.json";

export const useTheme = create((set) => ({
  isTheme: localStorage.getItem("Theme") || configData.DARK_COLOR,
  setTheme: (string) => {
    localStorage.setItem("Theme", string);
    document.body.style.backgroundColor = string;
    set({
      isTheme: string,
    });
  },
}));
