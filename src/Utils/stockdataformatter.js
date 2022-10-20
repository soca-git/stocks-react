
export function FormatMarketCap(rawData)
{
    return (rawData / 1000000000).toFixed(2) + "B";
}

export function FormatVolume(rawData)
{
    return (rawData / 1000000).toFixed(2) + "M";
}
