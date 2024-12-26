import { configureStore } from "@reduxjs/toolkit";
import { storageReducer } from "./slices/storage";
import { userReducer } from "./slices/user";
import { recipeReducer } from "./slices/recipe";

//import { useDispatch } from "react-redux";
//const dispatch = useDispatch();
//dispatch(loginUser({ login: "123", password: "pas" }));
// useSelector((state: any) => state.user.isAuthorized.status);

const store = configureStore({
  reducer: {
    recipe: recipeReducer,
    storage: storageReducer,
    user: userReducer,
  },
});

export default store;
