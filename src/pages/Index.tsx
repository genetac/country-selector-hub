import { useState } from "react";
import { Input } from "@/components/ui/input";
import { countries, type Country } from "@/utils/countries";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Index = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCountrySelect = (country: Country) => {
    toast.success(`Selected ${country.name}`);
    // Here you can navigate to the next page or store the selection
    localStorage.setItem("selectedCountry", JSON.stringify(country));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Select Your Country
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Choose your location to get started with our services
          </p>
        </div>

        <div className="mt-10 max-w-xl mx-auto">
          <Input
            type="search"
            placeholder="Search countries..."
            className="w-full h-12 px-4 rounded-lg border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow duration-200"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCountries.map((country) => (
            <button
              key={country.code}
              onClick={() => handleCountrySelect(country)}
              className="group relative bg-white p-6 focus:outline-none rounded-xl border border-gray-200 hover:border-purple-500 transition-all duration-200 hover:shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <span className="text-4xl">{country.flag}</span>
                <span className="text-lg font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                  {country.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;