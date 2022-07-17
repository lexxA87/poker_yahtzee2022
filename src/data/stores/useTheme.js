import create from "zustand";

export const useTheme = create((set) => ({
  isTheme: localStorage.getItem("Theme") || "#212529",
  setTheme: (string) => {
    localStorage.setItem("Theme", string);
    set({
      isDarkTheme: string,
    });
  },
}));
