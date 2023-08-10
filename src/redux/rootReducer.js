import { combineReducers } from "redux";
import { TokenReducer } from "./token/tokenReducer";
import { ThemeReducer } from "./theme/themeReducer";

export const RootRedusers = combineReducers({
  token: TokenReducer,
  theme: ThemeReducer,
});
