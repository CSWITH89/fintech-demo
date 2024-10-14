const API_KEY = process.env.CRYPTO_API_KEY;

export async function GET(request: Request) {
  // const url = new URL(request.url);
  // const limit = url.searchParams.get("limit") || 5;

  // const response = await fetch(
  //   `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=${limit}&convert=EUR`,
  //   {
  //     headers: {
  //       "X-CMC_PRO_API_KEY": API_KEY!,
  //     },
  //   }
  // );

  // const res = await response.json();

  // return Response.json(res.data);
  return Response.json(data);
}

const data = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    slug: "bitcoin",
    num_market_pairs: 11771,
    date_added: "2010-07-13T00:00:00.000Z",
    tags: [
      "mineable",
      "pow",
      "sha-256",
      "store-of-value",
      "state-channel",
      "coinbase-ventures-portfolio",
      "three-arrows-capital-portfolio",
      "polychain-capital-portfolio",
      "binance-labs-portfolio",
      "blockchain-capital-portfolio",
      "boostvc-portfolio",
      "cms-holdings-portfolio",
      "dcg-portfolio",
      "dragonfly-capital-portfolio",
      "electric-capital-portfolio",
      "fabric-ventures-portfolio",
      "framework-ventures-portfolio",
      "galaxy-digital-portfolio",
      "huobi-capital-portfolio",
      "alameda-research-portfolio",
      "a16z-portfolio",
      "1confirmation-portfolio",
      "winklevoss-capital-portfolio",
      "usv-portfolio",
      "placeholder-ventures-portfolio",
      "pantera-capital-portfolio",
      "multicoin-capital-portfolio",
      "paradigm-portfolio",
      "bitcoin-ecosystem",
      "ftx-bankruptcy-estate",
    ],
    max_supply: 21000000,
    circulating_supply: 19767415,
    total_supply: 19767415,
    infinite_supply: false,
    platform: null,
    cmc_rank: 1,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2024-10-14T09:49:00.000Z",
    quote: {
      EUR: {
        price: 59220.11570130588,
        volume_24h: 25550848958.589207,
        volume_change_24h: 69.2406,
        percent_change_1h: 0.53388578,
        percent_change_24h: 3.07476018,
        percent_change_7d: 2.4319915,
        percent_change_30d: 8.04093759,
        percent_change_60d: 10.70382013,
        percent_change_90d: 2.49468028,
        market_cap: 1170628603415.7292,
        market_cap_dominance: 56.9496,
        fully_diluted_market_cap: 1243622429727.4236,
        tvl: null,
        last_updated: "2024-10-14T09:48:05.000Z",
      },
    },
  },
  {
    id: 1027,
    name: "Ethereum",
    symbol: "ETH",
    slug: "ethereum",
    num_market_pairs: 9413,
    date_added: "2015-08-07T00:00:00.000Z",
    tags: [
      "pos",
      "smart-contracts",
      "ethereum-ecosystem",
      "coinbase-ventures-portfolio",
      "three-arrows-capital-portfolio",
      "polychain-capital-portfolio",
      "binance-labs-portfolio",
      "blockchain-capital-portfolio",
      "boostvc-portfolio",
      "cms-holdings-portfolio",
      "dcg-portfolio",
      "dragonfly-capital-portfolio",
      "electric-capital-portfolio",
      "fabric-ventures-portfolio",
      "framework-ventures-portfolio",
      "hashkey-capital-portfolio",
      "kenetic-capital-portfolio",
      "huobi-capital-portfolio",
      "alameda-research-portfolio",
      "a16z-portfolio",
      "1confirmation-portfolio",
      "winklevoss-capital-portfolio",
      "usv-portfolio",
      "placeholder-ventures-portfolio",
      "pantera-capital-portfolio",
      "multicoin-capital-portfolio",
      "paradigm-portfolio",
      "layer-1",
      "ftx-bankruptcy-estate",
    ],
    max_supply: null,
    circulating_supply: 120384963.83502929,
    total_supply: 120384963.83502929,
    infinite_supply: true,
    platform: null,
    cmc_rank: 2,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2024-10-14T09:49:00.000Z",
    quote: {
      EUR: {
        price: 2317.9485247024304,
        volume_24h: 13043476497.511087,
        volume_change_24h: 55.8917,
        percent_change_1h: 0.4259292,
        percent_change_24h: 2.79005649,
        percent_change_7d: 3.29620369,
        percent_change_30d: 4.88876937,
        percent_change_60d: -3.50080023,
        percent_change_90d: -25.36556243,
        market_cap: 279046149317.7616,
        market_cap_dominance: 13.5752,
        fully_diluted_market_cap: 279046149317.7618,
        tvl: null,
        last_updated: "2024-10-14T09:48:05.000Z",
      },
    },
  },
  {
    id: 825,
    name: "Tether USDt",
    symbol: "USDT",
    slug: "tether",
    num_market_pairs: 100170,
    date_added: "2015-02-25T00:00:00.000Z",
    tags: [
      "stablecoin",
      "asset-backed-stablecoin",
      "avalanche-ecosystem",
      "solana-ecosystem",
      "arbitrum-ecosytem",
      "moonriver-ecosystem",
      "injective-ecosystem",
      "bnb-chain",
      "usd-stablecoin",
      "optimism-ecosystem",
      "fiat-stablecoin",
    ],
    max_supply: null,
    circulating_supply: 119738104513.93327,
    total_supply: 121363587291.127,
    platform: {
      id: 1027,
      name: "Ethereum",
      symbol: "ETH",
      slug: "ethereum",
      token_address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    },
    infinite_supply: true,
    cmc_rank: 3,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2024-10-14T09:49:00.000Z",
    quote: {
      EUR: {
        price: 0.9140354241875388,
        volume_24h: 47605432969.78246,
        volume_change_24h: 48.1366,
        percent_change_1h: 0.00120204,
        percent_change_24h: -0.0469634,
        percent_change_7d: -0.05552837,
        percent_change_30d: -0.10785764,
        percent_change_60d: -0.10404596,
        percent_change_90d: -0.11066376,
        market_cap: 109444869150.80486,
        market_cap_dominance: 5.3244,
        fully_diluted_market_cap: 110930617990.56854,
        tvl: null,
        last_updated: "2024-10-14T09:48:05.000Z",
      },
    },
  },
  {
    id: 1839,
    name: "BNB",
    symbol: "BNB",
    slug: "bnb",
    num_market_pairs: 2259,
    date_added: "2017-07-25T00:00:00.000Z",
    tags: [
      "marketplace",
      "centralized-exchange",
      "payments",
      "smart-contracts",
      "alameda-research-portfolio",
      "multicoin-capital-portfolio",
      "bnb-chain",
      "layer-1",
      "sec-security-token",
      "alleged-sec-securities",
      "celsius-bankruptcy-estate",
    ],
    max_supply: null,
    circulating_supply: 145931917.50791427,
    total_supply: 145931917.50791427,
    infinite_supply: false,
    platform: null,
    cmc_rank: 4,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2024-10-14T09:49:00.000Z",
    quote: {
      EUR: {
        price: 530.2265613404521,
        volume_24h: 1497071448.5984387,
        volume_change_24h: 12.3832,
        percent_change_1h: 0.12449879,
        percent_change_24h: 0.92346633,
        percent_change_7d: 1.3212757,
        percent_change_30d: 4.99400563,
        percent_change_60d: 11.33981292,
        percent_change_90d: 2.2709724,
        market_cap: 77376978810.0399,
        market_cap_dominance: 3.7643,
        fully_diluted_market_cap: 77376978810.03905,
        tvl: null,
        last_updated: "2024-10-14T09:48:05.000Z",
      },
    },
  },
  {
    id: 5426,
    name: "Solana",
    symbol: "SOL",
    slug: "solana",
    num_market_pairs: 757,
    date_added: "2020-04-10T00:00:00.000Z",
    tags: [
      "pos",
      "platform",
      "solana-ecosystem",
      "cms-holdings-portfolio",
      "kenetic-capital-portfolio",
      "alameda-research-portfolio",
      "multicoin-capital-portfolio",
      "okx-ventures-portfolio",
      "layer-1",
      "ftx-bankruptcy-estate",
      "sec-security-token",
      "alleged-sec-securities",
      "cmc-crypto-awards-2024",
    ],
    max_supply: null,
    circulating_supply: 469761116.92791045,
    total_supply: 586577234.2901932,
    infinite_supply: true,
    platform: null,
    cmc_rank: 5,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2024-10-14T09:49:00.000Z",
    quote: {
      EUR: {
        price: 140.26817200713512,
        volume_24h: 1879193472.1047099,
        volume_change_24h: 84.9973,
        percent_change_1h: 0.6531571,
        percent_change_24h: 4.06238474,
        percent_change_7d: 4.21291799,
        percent_change_30d: 11.91277846,
        percent_change_60d: 7.46146529,
        percent_change_90d: -1.45018844,
        market_cap: 65892533151.50806,
        market_cap_dominance: 3.2056,
        fully_diluted_market_cap: 82278116394.8875,
        tvl: null,
        last_updated: "2024-10-14T09:48:05.000Z",
      },
    },
  },
];