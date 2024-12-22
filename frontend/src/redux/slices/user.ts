import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/react";
import axios from "../../axios";
import type { PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const loginUser: any = createAsyncThunk(
  "api/auth/login",
  async (_, { rejectWithValue, getState }: any) => {
    const { user } = getState() as { user: UserState };

    return await axios
      .post(`api/auth/login`, {
        username: user.username,
        password: user.password,
      })
      .then((res: any) => {
        console.log(res);
        return { payload: res.data };
      })
      .catch((e: any) => {
        return rejectWithValue({ data: e.response.data });
      });
  }
);

export const registerUser: any = createAsyncThunk(
  "api/auth/register",
  async (_, { rejectWithValue, getState }: any) => {
    const { user } = getState() as { user: UserState };
    console.log(user);

    return await axios
      .post(`api/auth/register`, {
        username: user.username,
        password: user.password,
        email: user.email,
      })
      .then((res: any) => {
        console.log(res);
        return { payload: res.data };
      })
      .catch((e: any) => {
        return rejectWithValue({ data: e.response.data });
      });
  }
);

export const getUser: any = createAsyncThunk("api/auth/me", async () => {
  const { data } = await axios.get("api/auth/me");
  return data;
});

export const getAllUsers: any = createAsyncThunk("api/user", async () => {
  const { data } = await axios.get("api/user");
  return data;
});

interface UserState {
  id: number;
  status: string;
  isAdmin: boolean;
  email: string;
  isAuthorized: boolean;
  password: string;
  username: string;
  users: any[];
}

const initialState: UserState = {
  id: 0,
  status: "loaded",
  isAdmin: false,
  email: "",
  isAuthorized: false,
  password: "",
  username: "",
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setRedirectPath: (state, action: PayloadAction<any>) => {
      console.log(state, action);
      //state.rederectPath.value = action.payload.location;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    // *loginUser
    builder.addCase(loginUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      if (payload.payload.status === "success") {
        toast.success("Авторизация успешна");
        const data = payload.payload.data;
        state.isAuthorized = true;
        state.username = data.username;
        state.isAdmin = data.isAdmin;
        state.email = data.email;
        state.status = "loaded";
      } else {
        toast.error("Неверный логин или пароль");
        state.status = "error";
      }
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.status = "error";
    });

    // *registerUser
    builder.addCase(registerUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      if (payload.payload.status === "success") {
        console.log(payload.payload);
        state.isAuthorized = true;
      }
      state.status = "loaded";
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.status = "error";
    });

    // *getUser
    builder.addCase(getUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getUser.fulfilled, (state, payload) => {
      if (payload.payload.status === "success") {
        state.isAuthorized = true;
        console.log(state.isAuthorized);
        const data = payload.payload.data;
        state.username = data.username;
        state.isAdmin = data.isAdmin;
        state.id = data.id;
        state.email = data.email;
      }
      state.status = "loaded";
    });
    builder.addCase(getUser.rejected, (state, { payload }) => {
      if (payload.data.message) toast.error(payload.data.message);
      state.status = "error";
    });

    // *getAllUsers
    builder.addCase(getAllUsers.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
      state.users = payload.users;
      state.status = "loaded";
    });
    builder.addCase(getAllUsers.rejected, (state, { payload }) => {
      if (payload.data.message) toast.error(payload.data.message);
      state.status = "error";
    });
  },
});

export const { setRedirectPath, setEmail, setUsername, setPassword } =
  userSlice.actions;

export const userReducer = userSlice.reducer;
