import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface CounterStore {
  counter: number;
  max: number;
  increase: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  max: 5,
  increase: () => set(({ counter }) => ({ counter: counter + 1 })),
  reset: () => set(() => ({ max: 10 })),
}));
mountStoreDevtool("counter", useCounterStore);
export default useCounterStore;
