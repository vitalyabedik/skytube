export const formatViewsCount = (viewsCount: number): string => {
  if (viewsCount >= 1000000) {
    return (viewsCount / 1000000).toFixed(1) + ' млн просмотров'
  } else if (viewsCount >= 1000) {
    return (viewsCount / 1000).toFixed(1) + ' тыс. просмотров'
  } else {
    return viewsCount + ' просмотров'
  }
}
