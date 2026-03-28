import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Favorites {
  id: number;
  title: string;
  image: string;
  year: number;
  description: string;
}

interface FavoriteStore {
  favorite: Favorites[];
  addToFavorites: (item: Favorites) => void;
  removeFromFavorites: (id: number) => void;
  clearFavorites: () => void;
}

export const useFavorite = create<FavoriteStore>()(
  persist(
    (set) => ({
      favorite: [],

      addToFavorites: (item) => {
        set((state) => ({
          favorite: state.favorite.some((el) => el.id === item.id)
            ? state.favorite
            : [...state.favorite, item],
        }));
      },

      removeFromFavorites: (id) => {
        set((state) => ({
          favorite: state.favorite.filter((el) => el.id !== id),
        }));
      },

      clearFavorites: () => {
        set({ favorite: [] });
      },
    }),
    { name: "favorites" },
  ),
);
