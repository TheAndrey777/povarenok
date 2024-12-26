import { createSlice } from "@reduxjs/toolkit/react";

import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  menu: {
    activeId: -1,
  },
  find: {
    findItem: "",
  },
  recipe: {
    id: 12,
    name: "Оливье",
    img: "https://static.mk.ru/upload/entities/2020/12/09/16/articles/facebookPicture/0f/8e/35/b7/3d58d2f1da58bb5824a2b298e4959103.jpg",
    description:
      "Оливье - Царь салат! Подборка лучших праздничных салатов в нашем новогоднем спецпроекте\nПодборка лучших праздничных салатов в нашем \nновогоднем спецпроекте\nв нашем новогоднем спецпроекте",
    author: "Алексей Скобелев",
    like: 123,
    dislike: 123,
    favourites: 123,
    ingredients: [
      { name: "Яйца", count: "10 шт." },
      { name: "Майонез", count: "150 г." },
      { name: "Колбаса вареная", count: "300 г." },
      { name: "Картофель вареный", count: "500 г." },
      { name: "Майонез", count: "150 г." },
      { name: "Колбаса вареная", count: "300 г." },
      { name: "Картофель вареный", count: "500 г." },
    ],
    time: "30 мин",
    manual:
      "1 Разбейте яйца в миску и взболтайте их вилкой.\n2 Разрежьте помидор пополам и потрите на терке в миску с яйцами. Немного посолите и перемешайте.\nШпаргалка\nКак подготовить помидоры\n3 На разогретую сковородку вылейте немного подсолнечного масла и получившуюся яично-помидорную смесь.\n4 Теперь главное – не дать помидорояйцам превратиться в цельный кусок, как в случае приготовления классического омлета. Для этого помешивайте смесь лопаткой, как бы\nотковыривая затвердевающую смесь от стенок и дна сковородки. В итоге должна получиться россыпь пористых комков, как на фотографии.\nШпаргалка\nКак приготовить классический омлет\n5 Когда большая часть воды испарится со сковородки, выкладывайте готовый омлет на тарелку.",
  },
};

const storageSlice = createSlice({
  name: "storage",
  initialState,
  reducers: {
    setMenuActiveId: (state, action: PayloadAction<any>) => {
      state.menu.activeId = action.payload.id;
      console.log(state, action);
    },
    setRecipe: (state, action: PayloadAction<any>) => {
      state.recipe.id = action.payload.id;
      state.recipe.name = action.payload.name;
      state.recipe.img = action.payload.img;
      state.recipe.description = action.payload.description;
      state.recipe.author = action.payload.author;
      state.recipe.like = action.payload.like;
      state.recipe.dislike = action.payload.dislike;
      state.recipe.favourites = action.payload.favourites;
      state.recipe.ingredients = action.payload.ingredients;
      state.recipe.time = action.payload.time;
      state.recipe.manual = action.payload.manual;
    },
    setFindItem: (state, action: PayloadAction<any>) => {
      state.find.findItem = action.payload.findItem;
    },
  },
});

export const { setMenuActiveId, setRecipe, setFindItem } = storageSlice.actions;

export const storageReducer = storageSlice.reducer;
