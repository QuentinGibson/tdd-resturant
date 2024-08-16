import Image from "next/image";
import RestaurantScreen from "@/app/components/RestaurantScreen";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RestaurantScreen />
    </main>
  );
}
