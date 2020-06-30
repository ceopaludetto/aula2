import { TypedUseSelectorHook, useSelector } from "react-redux";

import { ApplicationState } from "../services";

export const useTypedSelector: TypedUseSelectorHook<ApplicationState> = useSelector;
