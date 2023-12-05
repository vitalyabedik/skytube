import { AppRootStateType } from '@/features'

export const selectIsAuth = (state: AppRootStateType) => state.auth.isAuth
