export type User = {
  name: string
  email: string
}

export type StockWithWatchlistStatus = {
  id?: string | number
  symbol?: string
  name?: string
  watchlisted?: boolean
  [key: string]: unknown
}
