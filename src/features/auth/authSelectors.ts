import { AppRootStateType } from '@/app/model/store'

export const selectIsAuth = (state: AppRootStateType) => state.auth.isAuth

export const selectUser = (state: AppRootStateType) => state.auth.user
