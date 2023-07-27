export type NewDataType = {
  rate: number
  asset_id_base: string
  asset_id_quote: string
}

export type OldDataType = { rate_close: number }

export type DataType = [NewDataType, OldDataType]

export type FomatedDataType = {
  assetLabel: string
  assetQuote: string
  rate: string
  variation: string
}

export type RequestDataType = [NewDataType, OldDataType[]]
