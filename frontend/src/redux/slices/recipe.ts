import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/react";
import axios from "../../axios";
import type { PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const createRecipe: any = createAsyncThunk(
  "/api/recipe/create",
  async (
    { name, img, description, manual, time, ingredients, onSuccess }: any,
    { rejectWithValue }: any
  ) => {
    return await axios
      .post(`/api/recipe`, {
        name,
        img,
        description,
        manual,
        time,
        ingredients,
      })
      .then((res: any) => {
        setTimeout(() => onSuccess(), 200);
        setTimeout(() => onSuccess(), 300);
        setTimeout(() => onSuccess(), 1000);
        return { payload: res.data };
      })
      .catch((e: any) => {
        return rejectWithValue({ data: e.response.data });
      });
  }
);

export const getFavourites: any = createAsyncThunk(
  "/api/user/get-favourites",
  async () => {
    console.log("get favourites");
    const { data } = await axios.get("/api/user/favourites");
    return data;
  }
);

export const addFavourites: any = createAsyncThunk(
  "/api/user/add-favourites",
  async ({ id, onSuccess }: any, { rejectWithValue }: any) => {
    return await axios
      .post(`/api/recipe/${id}/favourite`)
      .then((res: any) => {
        setTimeout(() => onSuccess(), 200);
        setTimeout(() => onSuccess(), 300);
        setTimeout(() => onSuccess(), 1000);
        return { payload: res.data };
      })
      .catch((e: any) => {
        return rejectWithValue({ data: e.response.data });
      });
  }
);

export const deleteFavourites: any = createAsyncThunk(
  "/api/user/delete-favourites",
  async ({ id, onSuccess }: any, { rejectWithValue }: any) => {
    return await axios
      .post(`/api/recipe/${id}/favourite`)
      .then((res: any) => {
        setTimeout(() => onSuccess(), 200);
        setTimeout(() => onSuccess(), 300);
        setTimeout(() => onSuccess(), 1000);
        return { payload: res.data };
      })
      .catch((e: any) => {
        return rejectWithValue({ data: e.response.data });
      });
  }
);

export const getRecipe: any = createAsyncThunk("/api/recipe/get", async () => {
  const { data } = await axios.get("/api/recipe");
  return data;
});

const initialState = {
  recipes: [],
  favourites: [],
  add: {
    status: "none",
  },
  get: {
    status: "none",
  },
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setAddStatus: (state, action: PayloadAction<any>) => {
      console.log(state, action);
    },
  },
  extraReducers: (builder) => {
    // *createOffice
    builder.addCase(createRecipe.pending, (state) => {
      state.add.status = "loading";
    });
    builder.addCase(createRecipe.fulfilled, (state, { payload }) => {
      if (payload.payload.status == "success") {
        toast.success("Рецепт был опубликован");
        state.add.status = "loaded";
      } else {
        state.add.status = "error";
      }
    });
    builder.addCase(createRecipe.rejected, (state, { payload }) => {
      if (payload.data.message) toast.error(payload.data.message);
      state.add.status = "error";
    });

    // *getRecipe
    builder.addCase(getRecipe.pending, (state) => {
      state.get.status = "loading";
    });
    builder.addCase(getRecipe.fulfilled, (state, { payload }) => {
      state.recipes = payload.data;
      state.get.status = "loaded";
    });
    builder.addCase(getRecipe.rejected, (state, { payload }) => {
      if (payload.data.message) toast.error(payload.data.message);
      state.get.status = "error";
    });

    // *getFavourites
    builder.addCase(getFavourites.pending, (state) => {
      state.get.status = "loading";
    });
    builder.addCase(getFavourites.fulfilled, (state, { payload }) => {
      state.favourites = payload.data;
      console.log("get favourite", payload);
      state.get.status = "loaded";
    });
    builder.addCase(getFavourites.rejected, (state, { payload }) => {
      if (payload.data.message) toast.error(payload.data.message);
      state.get.status = "error";
    });

    // *addFavourites
    builder.addCase(addFavourites.pending, (state) => {
      state.get.status = "loading";
    });
    builder.addCase(addFavourites.fulfilled, (state) => {
      toast.success("Рецепт добавлен в избранное");
      console.log("add");
      state.get.status = "loaded";
    });
    builder.addCase(addFavourites.rejected, (state) => {
      state.get.status = "error";
    });

    // *deleteFavourites
    builder.addCase(deleteFavourites.pending, (state) => {
      state.get.status = "loading";
    });
    builder.addCase(deleteFavourites.fulfilled, (state) => {
      toast.success("Рецепт удален из избранного");
      state.get.status = "loaded";
    });
    builder.addCase(deleteFavourites.rejected, (state) => {
      state.get.status = "error";
    });
  },
});

export const recipeReducer = recipeSlice.reducer;
