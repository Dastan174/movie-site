export interface IMoviesStore {
  movies: IData[];
  movie: IData | null;
  isPosting: boolean;
  isLoading: boolean;
  postMovie: (body: Movie) => Promise<void>;
  getAllMovies: () => Promise<void>;
  getOneMovie: (id: undefined | string) => Promise<void>;
  deleteMovie: (id: number) => Promise<void>;
  updateMovie: (
    id: string | number | undefined,
    newMovie: Partial<IData>,
  ) => Promise<void>;
}

export interface Movie {
  title: string;
  year: number;
  description: string;
  image: string;
}

export interface IGetResponse {
  success: boolean;
  current_page: number;
  per_page: number;
  total_pages: number;
  total_items: number;
  data: IData[];
}
export interface IGetOneResponse {
  success: boolean;
  current_page: number;
  per_page: number;
  total_pages: number;
  total_items: number;
  data: IData;
}
export interface IData {
  _id: number;
  title: string;
  year: number;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
