import { create } from "zustand";

interface CounterStore {
  counter: number;
  increase: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  increase: () => set(({ counter }) => ({ counter: counter + 1 })),
  reset: () => set(() => ({ counter: 0 })),
}));

export default useCounterStore;
