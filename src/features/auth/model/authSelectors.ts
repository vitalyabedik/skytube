import { AppRootStateType } from '@/app'

export const selectIsAuth = (state: AppRootStateType) => state.auth.isAuth
