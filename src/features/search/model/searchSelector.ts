import { AppRootStateType } from '@/features'

export const selectSearch = (state: AppRootStateType) => state.search.search

export const selectCurrentPage = (state: AppRootStateType) => state.search.currentPage

export const selectSearchQuery = (state: AppRootStateType) => state.search.query
