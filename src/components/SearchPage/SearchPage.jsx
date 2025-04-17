import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Loading from "../Loading";
import ResortCard from "../ResortCard";
import { AuthContext } from "../../providers/AuthProvider";

const SearchPage = () => {
  const { allResortData } = useContext(AuthContext);
  const location = useLocation();
  const [searchData, setSearchData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("q") || "";
    setSearchTerm(searchQuery);

    if (location.state?.results) {
      setSearchData(location.state.results);
    }
  }, [location.search, location.state]);

  const performSearch = (query, data) => {
    if (!query.trim()) return [];
  
    const queryWords = query.toLowerCase().split(/\s+/).filter(word => word.length > 0);
  
    return data.map((item) => {
      const resortWords = (item.resortName || "").toLowerCase().split(/\s+/);
      const locationWords = (item.location || "").toLowerCase().split(/\s+/);
  
      let matchedWords = [];
      let resortMatches = 0;
      let locationMatches = 0;
  
      queryWords.forEach(word => {
        if (resortWords.includes(word)) {
          matchedWords.push(word);
          resortMatches++;
        } else if (locationWords.includes(word)) {
          matchedWords.push(word);
          locationMatches++;
        }
      });
  
      const totalMatches = resortMatches + locationMatches;
  
      return {
        ...item,
        totalMatches,
        resortMatches,
        locationMatches,
        matchedWords: [...new Set(matchedWords)],
      };
    })
    .filter(item => item.totalMatches > 0)
    .sort((a, b) => {
      // Priority: total matches > resortName matches > location matches
      if (b.totalMatches !== a.totalMatches) return b.totalMatches - a.totalMatches;
      if (b.resortMatches !== a.resortMatches) return b.resortMatches - a.resortMatches;
      return b.locationMatches - a.locationMatches;
    });
  };
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (searchTerm.trim() !== "") {
          const filteredData = performSearch(searchTerm, allResortData);
          setSearchData(filteredData);
        } else if (!location.state?.results) {
          setSearchData([]);
        }
      } catch (error) {
        console.error("Error filtering search results:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, allResortData, location.state]);

  const modifyPlaceName = (place_name) => {
    if (!place_name) return "";
    const regex = /\d+\s*Nights/;
    return regex.test(place_name) ? place_name.replace(regex, "3 Nights") : place_name;
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-center text-[#18294B] mb-2">
          {searchTerm ? `Search Results for "${searchTerm}"` : 'Search Results'}
        </h1>
        <p className="text-center text-gray-600">
          {searchData.length} {searchData.length === 1 ? 'result' : 'results'} found
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loading />
        </div>
      ) : (
        <>
          {searchData.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {searchData.map((resort) => {
                const modifiedResort = {
                  ...resort,
                  place_name: modifyPlaceName(resort.place_name || resort.resortName),
                };
                return (
                  <Link to={`/singleResortPage/${resort._id}`} key={resort._id}>
                    <ResortCard resort={modifiedResort} />
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-600 text-lg mb-4">
                {searchTerm ? `No results found for "${searchTerm}"` : 'No search results'}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchPage;
