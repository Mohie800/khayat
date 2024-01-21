import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import server from "./api/server";

export const useRegisterStore = create((set) => ({
  reg: {},
  setReg: (reg) => set((state) => ({ ...state, reg })),
}));
export const useTaxStore = create((set) => ({
  tax: {},
  setTax: (tax) => set((state) => ({ ...state, tax })),
}));
export const useCityStore = create((set) => ({
  city: [],
  setCity: (city) => set((state) => ({ ...state, city })),
}));

const useDataStore = create(
  persist(
    (set) => ({
      data: {
        // logo: {},
        services: [],
        homeBanner: [],
        orderBanner: [],
        reg: {},
        tax: {},
        cities: [],
      },
      loading: true,
      error: null,
      setData: (data) => set((state) => ({ ...state, data })),
      fetchData: async (url) => {
        set({ loading: true, error: null });
        try {
          const { data } = await server.get("/data/get");
          set({ data, loading: false });
        } catch (error) {
          set({ error });
        }
      },
    }),
    {
      name: "data-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export const useDataFetching = () => {
  const { data, loading, error, fetchData } = useDataStore();

  return { data, loading, error, fetchData };
};
