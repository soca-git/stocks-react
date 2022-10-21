//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.17.0.0 (NJsonSchema v10.8.0.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

export class MarketStatusClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "http://localhost:53672";
    }

    /**
     * Returns market status based on the search query.
     * @param tickerSymbol Instrument's ticker symbol.
     */
    get(tickerSymbol: string): Promise<MarketStatusPreview> {
        let url_ = this.baseUrl + "/api/gateway/status/markets?";
        if (tickerSymbol === undefined || tickerSymbol === null)
            throw new Error("The parameter 'tickerSymbol' must be defined and cannot be null.");
        else
            url_ += "TickerSymbol=" + encodeURIComponent("" + tickerSymbol) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<MarketStatusPreview> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = MarketStatusPreview.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MarketStatusPreview>(null as any);
    }
}

export class StockSearchClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "http://localhost:53672";
    }

    /**
     * Returns stock previews based on the search query.
     * @param fragment The fragment used for the search.
     * @param count (optional) The maximum number of results returned.
     */
    get(fragment: string, count: number | undefined): Promise<StockPreview[]> {
        let url_ = this.baseUrl + "/api/gateway/search/stocks?";
        if (fragment === undefined || fragment === null)
            throw new Error("The parameter 'fragment' must be defined and cannot be null.");
        else
            url_ += "Fragment=" + encodeURIComponent("" + fragment) + "&";
        if (count === null)
            throw new Error("The parameter 'count' cannot be null.");
        else if (count !== undefined)
            url_ += "Count=" + encodeURIComponent("" + count) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<StockPreview[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(StockPreview.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<StockPreview[]>(null as any);
    }
}

export class StockInformationClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "http://localhost:53672";
    }

    /**
     * Returns basic information for all stocks on the platform.
     */
    get(): Promise<StockInformation[]> {
        let url_ = this.baseUrl + "/api/gateway/reference/data/stockinformation";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<StockInformation[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(StockInformation.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<StockInformation[]>(null as any);
    }
}

export class TickerSymbolsClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "http://localhost:53672";
    }

    /**
     * Returns a list of all ticker symbols on the platform.
     */
    get(): Promise<string[]> {
        let url_ = this.baseUrl + "/api/gateway/reference/data/tickersymbols";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<string[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(item);
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<string[]>(null as any);
    }
}

export class StockAdvancedQuoteClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "http://localhost:53672";
    }

    /**
     * Returns an advanced stock quote of the specified market instrument.
     * @param tickerSymbol Instrument's ticker symbol.
     */
    get(tickerSymbol: string): Promise<StockAdvancedQuote> {
        let url_ = this.baseUrl + "/api/gateway/prices/advancedquote?";
        if (tickerSymbol === undefined || tickerSymbol === null)
            throw new Error("The parameter 'tickerSymbol' must be defined and cannot be null.");
        else
            url_ += "TickerSymbol=" + encodeURIComponent("" + tickerSymbol) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<StockAdvancedQuote> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = StockAdvancedQuote.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<StockAdvancedQuote>(null as any);
    }
}

export class StockQuoteClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "http://localhost:53672";
    }

    /**
     * Returns a stock quote of the specified market instrument.
     * @param tickerSymbol Instrument's ticker symbol.
     */
    get(tickerSymbol: string): Promise<StockQuote> {
        let url_ = this.baseUrl + "/api/gateway/prices/quote?";
        if (tickerSymbol === undefined || tickerSymbol === null)
            throw new Error("The parameter 'tickerSymbol' must be defined and cannot be null.");
        else
            url_ += "TickerSymbol=" + encodeURIComponent("" + tickerSymbol) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<StockQuote> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = StockQuote.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<StockQuote>(null as any);
    }
}

export class HistoricalStockPricesClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "http://localhost:53672";
    }

    /**
     * Returns historical prices of the specified market instrument.
     * @param tickerSymbol A market instrument's ticker symbol.
     * @param range (optional) The period of time for historical prices to be returned.
    The default is "FiveDay".
     */
    get(tickerSymbol: string, range: HistoricalStockPricesRange | undefined): Promise<DayStockPrice[]> {
        let url_ = this.baseUrl + "/api/gateway/prices/historical?";
        if (tickerSymbol === undefined || tickerSymbol === null)
            throw new Error("The parameter 'tickerSymbol' must be defined and cannot be null.");
        else
            url_ += "tickerSymbol=" + encodeURIComponent("" + tickerSymbol) + "&";
        if (range === null)
            throw new Error("The parameter 'range' cannot be null.");
        else if (range !== undefined)
            url_ += "range=" + encodeURIComponent("" + range) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<DayStockPrice[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(DayStockPrice.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<DayStockPrice[]>(null as any);
    }
}

export class MarketStatusPreview implements IMarketStatusPreview {
    /** Name of the market. */
    name?: string;
    /** The market's current status. */
    status?: MarketStatus;

    constructor(data?: IMarketStatusPreview) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.name = _data["Name"];
            this.status = _data["Status"];
        }
    }

    static fromJS(data: any): MarketStatusPreview {
        data = typeof data === 'object' ? data : {};
        let result = new MarketStatusPreview();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Name"] = this.name;
        data["Status"] = this.status;
        return data;
    }
}

export interface IMarketStatusPreview {
    /** Name of the market. */
    name?: string;
    /** The market's current status. */
    status?: MarketStatus;
}

/** Status of whether the market is open for trading or not. */
export type MarketStatus = "Open" | "Closed";

export class StockInformation implements IStockInformation {
    /** Instrument's ticker symbol. */
    tickerSymbol?: string;
    /** Instrument's name. */
    name?: string;
    /** Instrument's traded currency. */
    currency?: CurrencyCode;
    /** Market instrument is traded on. */
    market?: string;

    constructor(data?: IStockInformation) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.tickerSymbol = _data["TickerSymbol"];
            this.name = _data["Name"];
            this.currency = _data["Currency"];
            this.market = _data["Market"];
        }
    }

    static fromJS(data: any): StockInformation {
        data = typeof data === 'object' ? data : {};
        let result = new StockInformation();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["TickerSymbol"] = this.tickerSymbol;
        data["Name"] = this.name;
        data["Currency"] = this.currency;
        data["Market"] = this.market;
        return data;
    }
}

export interface IStockInformation {
    /** Instrument's ticker symbol. */
    tickerSymbol?: string;
    /** Instrument's name. */
    name?: string;
    /** Instrument's traded currency. */
    currency?: CurrencyCode;
    /** Market instrument is traded on. */
    market?: string;
}

export class StockQuote extends StockInformation implements IStockQuote {
    /** Instrument's current price. */
    currentPrice?: number;
    /** Instrument's current delta. */
    currentDelta?: number;

    constructor(data?: IStockQuote) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.currentPrice = _data["CurrentPrice"];
            this.currentDelta = _data["CurrentDelta"];
        }
    }

    static override fromJS(data: any): StockQuote {
        data = typeof data === 'object' ? data : {};
        let result = new StockQuote();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["CurrentPrice"] = this.currentPrice;
        data["CurrentDelta"] = this.currentDelta;
        super.toJSON(data);
        return data;
    }
}

export interface IStockQuote extends IStockInformation {
    /** Instrument's current price. */
    currentPrice?: number;
    /** Instrument's current delta. */
    currentDelta?: number;
}

export class StockPreview extends StockQuote implements IStockPreview {

    constructor(data?: IStockPreview) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
    }

    static override fromJS(data: any): StockPreview {
        data = typeof data === 'object' ? data : {};
        let result = new StockPreview();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        super.toJSON(data);
        return data;
    }
}

export interface IStockPreview extends IStockQuote {
}

/** A currency's ISO-4217 standard code */
export type CurrencyCode = "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BOV" | "BRL" | "BSD" | "BTN" | "BWP" | "BYN" | "BZD" | "CAD" | "CDF" | "CHE" | "CHF" | "CHW" | "CLF" | "CLP" | "CNY" | "COP" | "COU" | "CRC" | "CUC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "IQD" | "IRR" | "ISK" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MXV" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLE" | "SOS" | "SRD" | "SSP" | "STN" | "SVC" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "USN" | "UYI" | "UYU" | "UZS" | "VED" | "VEF" | "VND" | "VUV" | "WST" | "XAF" | "XCD" | "XDR" | "XOF" | "XPF" | "XSU" | "XUA" | "YER" | "ZAR" | "ZMW" | "ZWL";

export class StockAdvancedQuote extends StockInformation implements IStockAdvancedQuote {
    /** Instrument's current price. */
    currentPrice?: number;
    /** Instrument's current delta. */
    currentDelta?: number;
    /** Instrument's price on market open. */
    openPrice?: number;
    /** Instrument's price on market close. */
    closePrice?: number;
    /** Instrument's highest price. */
    highPrice?: number;
    /** Instrument's lowest price. */
    lowPrice?: number;
    /** Instrument's traded volume. */
    volume?: number;
    /** Instrument's average traded volume. */
    averageVolume?: number;
    /** Instrument's price per earnings ratio. */
    pricePerEarningsRatio?: number;
    /** Instrument's market cap. */
    marketCap?: number;
    /** Instrument's highest value in the past 52 weeks. */
    fiftyTwoWeekHigh?: number;
    /** Instrument's lowest value in the past 52 weeks. */
    fiftyTwoWeekLow?: number;
    /** Instrument's yield. */
    yield?: number;
    /** Instrument's beta. */
    beta?: number;
    /** Instrument's earnings per share. */
    earningsPerShare?: number;

    constructor(data?: IStockAdvancedQuote) {
        super(data);
    }

    override init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.currentPrice = _data["CurrentPrice"];
            this.currentDelta = _data["CurrentDelta"];
            this.openPrice = _data["OpenPrice"];
            this.closePrice = _data["ClosePrice"];
            this.highPrice = _data["HighPrice"];
            this.lowPrice = _data["LowPrice"];
            this.volume = _data["Volume"];
            this.averageVolume = _data["AverageVolume"];
            this.pricePerEarningsRatio = _data["PricePerEarningsRatio"];
            this.marketCap = _data["MarketCap"];
            this.fiftyTwoWeekHigh = _data["FiftyTwoWeekHigh"];
            this.fiftyTwoWeekLow = _data["FiftyTwoWeekLow"];
            this.yield = _data["Yield"];
            this.beta = _data["Beta"];
            this.earningsPerShare = _data["EarningsPerShare"];
        }
    }

    static override fromJS(data: any): StockAdvancedQuote {
        data = typeof data === 'object' ? data : {};
        let result = new StockAdvancedQuote();
        result.init(data);
        return result;
    }

    override toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["CurrentPrice"] = this.currentPrice;
        data["CurrentDelta"] = this.currentDelta;
        data["OpenPrice"] = this.openPrice;
        data["ClosePrice"] = this.closePrice;
        data["HighPrice"] = this.highPrice;
        data["LowPrice"] = this.lowPrice;
        data["Volume"] = this.volume;
        data["AverageVolume"] = this.averageVolume;
        data["PricePerEarningsRatio"] = this.pricePerEarningsRatio;
        data["MarketCap"] = this.marketCap;
        data["FiftyTwoWeekHigh"] = this.fiftyTwoWeekHigh;
        data["FiftyTwoWeekLow"] = this.fiftyTwoWeekLow;
        data["Yield"] = this.yield;
        data["Beta"] = this.beta;
        data["EarningsPerShare"] = this.earningsPerShare;
        super.toJSON(data);
        return data;
    }
}

export interface IStockAdvancedQuote extends IStockInformation {
    /** Instrument's current price. */
    currentPrice?: number;
    /** Instrument's current delta. */
    currentDelta?: number;
    /** Instrument's price on market open. */
    openPrice?: number;
    /** Instrument's price on market close. */
    closePrice?: number;
    /** Instrument's highest price. */
    highPrice?: number;
    /** Instrument's lowest price. */
    lowPrice?: number;
    /** Instrument's traded volume. */
    volume?: number;
    /** Instrument's average traded volume. */
    averageVolume?: number;
    /** Instrument's price per earnings ratio. */
    pricePerEarningsRatio?: number;
    /** Instrument's market cap. */
    marketCap?: number;
    /** Instrument's highest value in the past 52 weeks. */
    fiftyTwoWeekHigh?: number;
    /** Instrument's lowest value in the past 52 weeks. */
    fiftyTwoWeekLow?: number;
    /** Instrument's yield. */
    yield?: number;
    /** Instrument's beta. */
    beta?: number;
    /** Instrument's earnings per share. */
    earningsPerShare?: number;
}

export class DayStockPrice implements IDayStockPrice {
    /** The date of the day's stock price information. */
    date?: Date;
    /** The stock price on market open. */
    open?: number;
    /** The stock price on market close. */
    close?: number;
    /** The highest price of the stock during the day. */
    high?: number;
    /** The lowest price of the stock during the day. */
    low?: number;
    /** The volume of stock traded during the day. */
    volume?: number;

    constructor(data?: IDayStockPrice) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.date = _data["Date"] ? new Date(_data["Date"].toString()) : <any>undefined;
            this.open = _data["Open"];
            this.close = _data["Close"];
            this.high = _data["High"];
            this.low = _data["Low"];
            this.volume = _data["Volume"];
        }
    }

    static fromJS(data: any): DayStockPrice {
        data = typeof data === 'object' ? data : {};
        let result = new DayStockPrice();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Date"] = this.date ? this.date.toISOString() : <any>undefined;
        data["Open"] = this.open;
        data["Close"] = this.close;
        data["High"] = this.high;
        data["Low"] = this.low;
        data["Volume"] = this.volume;
        return data;
    }
}

export interface IDayStockPrice {
    /** The date of the day's stock price information. */
    date?: Date;
    /** The stock price on market open. */
    open?: number;
    /** The stock price on market close. */
    close?: number;
    /** The highest price of the stock during the day. */
    high?: number;
    /** The lowest price of the stock during the day. */
    low?: number;
    /** The volume of stock traded during the day. */
    volume?: number;
}

/** Range of time for which prices will be returned. */
export type HistoricalStockPricesRange = "FiveDay" | "OneMonth" | "ThreeMonths" | "OneYear";

export class ApiException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}