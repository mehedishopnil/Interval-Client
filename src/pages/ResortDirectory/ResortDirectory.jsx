import { useContext } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const ResortDirectory = () => {
    const { allResortData } = useContext(AuthContext);
    const navigate = useNavigate();
    const countries = [
        "USA",
        "United Arab Emirates",
        "France",
        "Italy",
        "Mexico",
        "Brazil",
        "Argentina"
    ];

    const handleCountryClick = (country) => {
        // Find the country in allResortData
        const countryData = allResortData?.find((resort) => resort.country === country);

        if (countryData && countryData.region?.length > 0) {
            // If the country has regions, navigate to the Region page
            navigate(`/region/${encodeURIComponent(country)}`);
        } else {
            // Otherwise, navigate to the Resort page
            navigate(`/resort-page/${encodeURIComponent(country)}`);
        }
    };

    return (
        <div>
            <h1 className="pt-5 pl-2 text-xl font-bold text-[#0077BE]">Resort Directory countries</h1>
            <div className="py-5">
                {countries.map((country, index) => (
                    <div
                        key={index}
                        onClick={() => handleCountryClick(country)}
                        className="border-t py-2 px-3 hover:bg-slate-300 flex justify-between cursor-pointer"
                    >
                        <p>{country}</p>
                        <IoIosArrowForward className="font-bold text-xl text-orange-500" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResortDirectory;
