import { create } from "zustand";

interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  reset: () => set((state) => ({ count: (state.count = 0) })),
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () =>
    set((state) => ({
      count: state.count <= 0 ? 0 : state.count - 1,
    })),
}));

export default useCounterStore;
