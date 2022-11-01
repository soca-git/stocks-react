
export function FormatPrice(rawData)
{
    return rawData != null ? rawData.toFixed(2) : 0.00;
}

export function FormatMarketCap(rawData)
{
    return rawData != null ? (rawData / 1000000000).toFixed(2) + "B" : null;
}

export function FormatVolume(rawData)
{
    return rawData != null ? (rawData / 1000000).toFixed(2) + "M" : null;
}
