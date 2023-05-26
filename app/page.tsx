import CityPicker from "@/components/Citypicker";
import { Card, Divider, Subtitle, Text } from "../tremor";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394f68] to-[#183b7e] p-10 flex flex-col justify-center">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-xl text-center">
          Powered by OpenAI, Next.js 13.4, Tailwind CSS, Termor 2.0 + More!
        </Subtitle>

        <Divider className="my-10" />

        <Card className="bg-gradient-to-br from-[#394f68] to-[#183b7e] ">
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
