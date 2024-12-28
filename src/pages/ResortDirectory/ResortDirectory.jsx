import { useContext } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const ResortDirectory = () => {
    const {allResortData} = useContext(AuthContext);


    const regions = [
        "USA",
        "United Arab Emirates"
    ];

    return (
        <div>
            <h1 className="pt-5 pl-2 text-xl font-bold text-[#0077BE]">Resort Directory Regions</h1>
            <div className="py-5">
                {regions.map((region, index) => (
                    <Link to={`/resort-page/${encodeURIComponent(region)}`} key={index}>
                        <div className="border-t py-2 px-3 hover:bg-slate-300 flex justify-between">
                            <p>{region}</p>
                            <IoIosArrowForward className="font-bold text-xl text-orange-500" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ResortDirectory;