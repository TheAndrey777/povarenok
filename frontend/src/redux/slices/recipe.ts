import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/react";
import axios from "../../axios";
import type { PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const createRecipe: any = createAsyncThunk(
  "/api/recipe/create",
  async (
    { name, img, description, manual, time, ingredients }: any,
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
        return { payload: res.data };
      })
      .catch((e: any) => {
        return rejectWithValue({ data: e.response.data });
      });
  }
);

export const getRecipe: any = createAsyncThunk("/api/recipe/get", async () => {
  console.log("get recipe");
  const { data } = await axios.get("/api/recipe");
  console.log(data);
  return data;
});

const initialState = {
  recipes: [],
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
      console.log(payload.data);
      state.recipes = payload.data;
      console.log(123, state.recipes);
      state.get.status = "loaded";
    });
    builder.addCase(getRecipe.rejected, (state, { payload }) => {
      if (payload.data.message) toast.error(payload.data.message);
      state.get.status = "error";
    });
  },
});

export const recipeReducer = recipeSlice.reducer;
