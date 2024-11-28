import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Country } from "@/utils/countries";

const Earn = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const countryData = localStorage.getItem("selectedCountry");
    if (!countryData) {
      navigate("/");
      return;
    }
    setSelectedCountry(JSON.parse(countryData));
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Earning Options for {selectedCountry?.name}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Earn with Ads Section */}
          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-xl border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Earn with Ads</h2>
            <p className="text-white/90 mb-6">
              Complete sponsored tasks and earn rewards by watching ads and participating
              in promotional activities.
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Start Earning with Ads
            </button>
          </div>

          {/* Earn with Referrals Section */}
          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-xl border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Earn with Referrals</h2>
            <p className="text-white/90 mb-6">
              Invite friends and earn a commission when they complete tasks. Build your
              network and maximize your earnings.
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Start Referring
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earn;