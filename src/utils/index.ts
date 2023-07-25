export function getVariationRate(
  newValue: number,
  oldValue: number,
  options?: Intl.NumberFormatOptions
) {
  const opt = {
    style: 'percent',
    minimumFractionDigits: 3,
    ...options,
  }
  const formatedRate = new Intl.NumberFormat('en-US', opt).format(
    (newValue / oldValue - 1) * 100
  )

  return formatedRate.startsWith('-') ? formatedRate : `+${formatedRate}`
}

export function formatCurrency(
  value: number,
  options?: Intl.NumberFormatOptions
) {
  const opt = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    ...options,
  }

  return new Intl.NumberFormat('en-US', opt).format(value)
}
