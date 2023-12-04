import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { AppRootStateType } from '@/features'

/**
 * Custom React hook that allows selecting data from the Redux store's state with type safety.
 *
 * @template AppRootStateType - The type of the root state of the application.
 * @returns {AppRootStateType} The selected portion of the Redux store's state with type safety.
 */

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
