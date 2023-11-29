import { AppRootStateType } from '@/app'

export const selectSearch = (state: AppRootStateType) => state.search.search
