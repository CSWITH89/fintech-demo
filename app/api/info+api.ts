const API_KEY = process.env.CRYPTO_API_KEY;

export async function GET(request: Request & { expoUrl: URL }) {
  const url = new URL(request.url);

  const ids = url.searchParams.get("ids");

  const response = await fetch(
    `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?ids=${ids}`,
    {
      headers: {
        "X-CMC_PRO_API_KEY": API_KEY!,
      },
    }
  );

  const res = await response.json();

  return Response.json(res.data);
}
