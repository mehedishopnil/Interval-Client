import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SearchAllDestinations = () => {
  const { allResortData } = useContext(AuthContext);
  const navigate = useNavigate();
  const [destinationInput, setDestinationInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Enhanced search function
  const performSearch = (query, data) => {
    if (!query.trim()) return [];

    const queryWords = query.toLowerCase().split(/\s+/).filter(word => word.length > 0);
    
    return data.map(item => {
      let score = 0;
      let matchedWords = [];
      let matchedFields = [];
      
      // Check each query word against relevant fields
      queryWords.forEach(word => {
        const resortNameWords = item.resortName?.toLowerCase().split(/\s+/) || [];
        const locationWords = item.location?.toLowerCase().split(/\s+/) || [];
        const cityWords = item.city?.toLowerCase().split(/\s+/) || [];
        const countryWords = item.country?.toLowerCase().split(/\s+/) || [];
        
        // Check for matches in different fields with different weights
        const nameMatch = resortNameWords.some(nameWord => nameWord.includes(word));
        const locationMatch = locationWords.some(locWord => locWord.includes(word));
        const cityMatch = cityWords.some(cityWord => cityWord.includes(word));
        const countryMatch = countryWords.some(countryWord => countryWord.includes(word));
        
        if (nameMatch) {
          score += 3; // Highest weight for resort name matches
          matchedWords.push(word);
          matchedFields.push('resortName');
        }
        if (locationMatch) {
          score += 2;
          if (!matchedWords.includes(word)) matchedWords.push(word);
          matchedFields.push('location');
        }
        if (cityMatch) {
          score += 2;
          if (!matchedWords.includes(word)) matchedWords.push(word);
          matchedFields.push('city');
        }
        if (countryMatch) {
          score += 1;
          if (!matchedWords.includes(word)) matchedWords.push(word);
          matchedFields.push('country');
        }
      });
      
      return { 
        ...item, 
        score, 
        matchedWordsCount: matchedWords.length,
        matchedFields: [...new Set(matchedFields)] // Remove duplicates
      };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => {
      // Sort by score (descending)
      if (b.score !== a.score) return b.score - a.score;
      
      // Then by number of matched words
      if (b.matchedWordsCount !== a.matchedWordsCount) {
        return b.matchedWordsCount - a.matchedWordsCount;
      }
      
      // Then prioritize resort name matches
      if (b.matchedFields.includes('resortName') && !a.matchedFields.includes('resortName')) return 1;
      if (a.matchedFields.includes('resortName') && !b.matchedFields.includes('resortName')) return -1;
      
      return 0;
    });
  };

  // Generate search suggestions
  const generateSuggestions = (query) => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const results = performSearch(query, allResortData);
    const uniqueLocations = [...new Set(
      results.slice(0, 5).map(item => item.location || item.city || item.country)
    )];
    setSuggestions(uniqueLocations);
  };

  // Handle destination input change
  const handleDestinationInputChange = (e) => {
    const value = e.target.value;
    setDestinationInput(value);
    generateSuggestions(value);
    setShowSuggestions(true);
  };

  // Handle suggestion selection
  const handleSuggestionClick = (suggestion) => {
    setDestinationInput(suggestion);
    setShowSuggestions(false);
  };

  // Handle search functionality
  const handleSearch = () => {
    if (!destinationInput.trim()) {
      alert("Please enter a destination.");
      return;
    }

    const filteredResorts = performSearch(destinationInput, allResortData);

    if (filteredResorts.length === 0) {
      alert("No matching destinations found.");
    } else {
      navigate("/search", { 
        state: { results: filteredResorts },
        search: `?q=${encodeURIComponent(destinationInput)}`
      });
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="mt-8 relative">
      {/* Destination Input */}
      <label htmlFor="destination" className="block text-gray-700 font-medium mb-2">
        Destination
      </label>
      <div className="relative">
        <input
          id="destination"
          type="text"
          placeholder="Enter city, resort name, or a point of interest"
          className="input input-bordered w-full"
          value={destinationInput}
          onChange={handleDestinationInputChange}
          onKeyPress={handleKeyPress}
          onFocus={() => setShowSuggestions(true)}
        />
        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Submit Button */}
      <button
        className="w-full bg-blue-500 rounded text-white font-medium py-3 mt-6 hover:bg-blue-600"
        onClick={handleSearch}
      >
        Find Getaway
      </button>
    </div>
  );
};

export default SearchAllDestinations;