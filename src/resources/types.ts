export type NewDataType = {
  rate: number
  asset_id_base: string
  asset_id_quote: string
}

export type OldDataType = { rate_close: number }

export type RequestRateType = [NewDataType, OldDataType]

export type FomatedDataType = {
  assetLabel: string
  assetQuote: string
  rate: string
  variation: string
}

export type IconRequestType = {
  asset_id: string
  url: string
}

export type RequestDataType = [NewDataType, OldDataType[]]
