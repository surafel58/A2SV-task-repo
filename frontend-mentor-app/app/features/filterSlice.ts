// filterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  role: string[];
  level: string[];
  language: string[];
}

const initialState: FilterState = {
  role: [],
  level: [],
  language: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterState>) => {
    //   return { ...state, ...action.payload };
    console.log(action.payload)
        state.role.push(...action.payload.role)
        state.level.push(...action.payload.level)
        state.language.push(...action.payload.language)
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
