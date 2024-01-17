import useIsMobile from "./../hooks/useIsMobile";

const Header = () => {
  const isMobile = useIsMobile();

  const tips = [
    "Engage in at least 30 minutes of moderate exercise most days of the week for cardiovascular health.",
    "Include a variety of fruits and vegetables in your diet to ensure you get all necessary nutrients.",
    "Aim for 7-9 hours of sleep each night to help your body repair and rejuvenate.",
    "Dedicate a few minutes each day to mindfulness or meditation to reduce stress and improve mental health.",
    "Reduce intake of processed foods high in salt, sugar, and unhealthy fats.",
    "Choose healthy snack options like nuts, fruits, or yogurt instead of high-calorie, low-nutrient foods.",
    "Break long periods of sitting with short activity breaks – even a brief walk or stretch can help.",
    "Use sunscreen and wear protective clothing when outside to protect your skin from harmful UV rays.",
  ];

  const getRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    return tips[randomIndex];
  };

  return (
    <div
      className="flex gap-y-4 
      max-md:flex-col max-md:items-center
      md:justify-between md:mb-8"
    >
      <h1 className="text-3xl md:text-5xl">RoutineCheck</h1>
      {isMobile && <div className="border-b w-full border-black"></div>}
      <p className="text-blue-800 md:text-xl md:max-w-[600px]">
        "{getRandomTip()}"
      </p>
      {isMobile && <div className="border-b w-full border-black mb-4"></div>}
    </div>
  );
};

export default Header;
