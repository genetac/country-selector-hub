import { useState } from "react";
import { Input } from "@/components/ui/input";
import { countries, type Country } from "@/utils/countries";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Index = () => {
  const [showCountries, setShowCountries] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCountrySelect = (country: Country) => {
    toast.success(`Selected ${country.name}`);
    localStorage.setItem("selectedCountry", JSON.stringify(country));
  };

  const handleSearchFocus = () => {
    setShowCountries(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mt-10 max-w-xl mx-auto">
          <Input
            type="search"
            placeholder="Choose where you're from..."
            className="w-full h-12 px-4 rounded-lg border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow duration-200"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={handleSearchFocus}
          />
        </div>

        {showCountries && (
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCountries.map((country) => (
              <button
                key={country.code}
                onClick={() => handleCountrySelect(country)}
                className="group relative bg-white p-6 focus:outline-none rounded-xl border border-gray-200 hover:border-purple-500 transition-all duration-200 hover:shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <img 
                    src={country.flagUrl} 
                    alt={`${country.name} flag`}
                    className="w-10 h-auto object-contain"
                  />
                  <span className="text-lg font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                    {country.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;