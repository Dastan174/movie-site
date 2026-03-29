import { create } from "zustand";
import type { IGetOneResponse, IGetResponse, IMoviesStore } from "./types/type";
import axios from "axios";
import { API } from "../constants/API";

export const useMovies = create<IMoviesStore>((set) => ({
  movies: [],
  movie: null,
  isPosting: false,
  isLoading: false,
  postMovie: async (body) => {
    set({ isPosting: true });
    try {
      let response = await axios.post(`${API}`, body);
      set((state) => ({
        movies: [...state.movies, response.data.data],
        isPosting: false,
      }));
    } catch (error: any) {
      console.log(error.message);
      set({ isPosting: false });
    }
  },
  getAllMovies: async () => {
    set({ isLoading: true });
    try {
      let response = await axios.get<IGetResponse>(`${API}`);
      set({ movies: response.data.data, isLoading: false });
    } catch (error: any) {
      console.log(error.message);
      set({ isLoading: false });
    }
  },
  getOneMovie: async (id) => {
    try {
      let response = await axios.get<IGetOneResponse>(`${API}/${id}`);
      set({ movie: response.data.data });
    } catch (error: any) {
      console.log(error.message);
    }
  },
  deleteMovie: async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      set((state) => ({
        movies: state.movies.filter((item) => item._id != id),
      }));
    } catch (error: any) {
      console.log(error.message);
    }
  },
  updateMovie: async (id, newMovie) => {
    try {
      await axios.patch(`${API}/${id}`, newMovie);
      set((state) => ({
        movies: state.movies.map((item) =>
          item._id == id ? { ...item, ...newMovie } : item,
        ),
      }));
    } catch (error: any) {
      console.log(error.message);
    }
  },
}));
