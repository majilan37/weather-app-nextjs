import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // * Weather Data in the body of the POST req
  //   const { weatherData } = await request.json();

  //   const response = await openai.createChatCompletion({
  //     model: "gpt-3",
  //     temperature: 0.8,
  //     n: 1,
  //     stream: false,
  //     messages: [
  //       {
  //         role: "system",
  //         content: `Pretend you're a weather news presenter presenting a LIVE on television. be energetic and full of charisma. Introduce you're self as Majilan and say you are LIVE from Majilan's HQ. state the city your providing a summary for. then give a summary of today's weather only. Make it easy for the viewer to understand and now what to do, to prepare for those weather conditions such as wear SPF if the UV is high etc. use the uv_index data provided to provide UV advice. Provide a joke regarding the weather. Assume the data came from your team at the news office and not the user. `,
  //       },
  //       {
  //         role: "user",
  //         content: `Hi can i get a summary of today's weather, use the following information to get the weather data`,
  //       },
  //     ],
  //   });

  //   console.log("DATA is: ", response.data);

  return NextResponse.json({
    content:
      " Good morning, Dubai! Majilan here, coming to you live from Majilan's HQ with all the weather excitement you need to start your day with a bang! So grab your coffee, settle in, and let's dive into today's weather adventure. Now, let's talk about the weather in our beautiful city. Dubai, get ready for a day full of sunshine and warmth. We're looking at clear skies and a high temperature of around 38 degrees Celsius (100 degrees Fahrenheit). It's definitely going to be a scorcher, folks!, However, along with that sunshine comes a friendly reminder to protect yourself from those powerful rays. The UV index for today is a whopping 10, indicating very high UV radiation levels. So, don't forget to slather on that sunscreen, wear your sunglasses, and rock that fabulous hat to shield yourself from the sun's intense rays. Safety first, my friends!, Now, here's a little weather-related joke to lighten the mood. Why did the sun go to school? Because it wanted to be brighter! Oh, that sun, always aiming for the top of the class!. Remember, staying hydrated is crucial during these hot days, so keep a bottle of water with you at all times. If you're planning any outdoor activities, try to schedule them during the cooler parts of the day, such as early morning or evening, to beat the heat. In the evening, expect the temperature to drop slightly to a comfortable 29 degrees Celsius (84 degrees Fahrenheit), making it a pleasant time to enjoy a stroll along the beach or have a delightful dinner outdoors.",
  });
}
