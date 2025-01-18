import { useContext } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Loading from '../Loading';

const Region = () => {
    const { id: country } = useParams(); // Get the country from URL params
    const { allResortData } = useContext(AuthContext);
    const navigate = useNavigate();

    // Find all unique, non-empty regions under the selected country
    const regions = [
        ...new Set(
            allResortData
                ?.filter((resort) => resort.country === country && resort.region?.trim()) // Exclude null, undefined, or empty regions
                .map((resort) => resort.region)
        ),
    ];

    const handleRegionClick = (region) => {
        // Check if the region exists in the data
        const regionData = allResortData?.find((resort) => resort.region === region);

        if (regionData) {
            // Navigate to Resort Page with the selected region
            navigate(`/resort-page/${encodeURIComponent(region)}`);
        }
    };

    return (
        <div>
            <h1 className="pt-5 pl-2 text-xl font-bold text-[#0077BE]">Regions in {country}</h1>
            <div className="py-5">
                {regions.length > 0 ? (
                    regions.map((region, index) => (
                        <div
                            key={index}
                            onClick={() => handleRegionClick(region)}
                            className="border-t py-2 px-3 hover:bg-slate-300 flex justify-between cursor-pointer"
                        >
                            <p>{region}</p>
                            <IoIosArrowForward className="font-bold text-xl text-orange-500" />
                        </div>
                    ))
                ) : (
                    <Loading/>
                )}
            </div>
        </div>
    );
};

export default Region;
