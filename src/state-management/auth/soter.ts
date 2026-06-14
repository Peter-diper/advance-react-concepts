import { create } from "zustand";

interface UsreStore {
  user: string;
  login: (logedUser: string) => void;
  logout: () => void;
}

const useUserStore = create<UsreStore>((set) => ({
  user: "",
  login: (logedUser) => set(() => ({ user: logedUser })),
  logout: () => set(() => ({ user: "" })),
}));

export default useUserStore;
