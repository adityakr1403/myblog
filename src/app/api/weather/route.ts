import {NextRequest} from "next/server";
const baseUrl = process.env.WEATHER_API_BASE_URL;

const getWeatherInfo = async ({latitude, longitude}: { latitude: string, longitude: string }) => {
    const response = await fetch(
        `${baseUrl}?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${process.env.WEATHER_API_KEY}`
    );
    return await response.json();
}

export async function POST(req: NextRequest) {
    const {latitude, longitude} = await req.json();

    const weatherInfo = await getWeatherInfo({latitude, longitude});

    return Response.json(weatherInfo);
}