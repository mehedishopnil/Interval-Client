import React, { useContext, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const InputResortData = () => {
  const [resortData, setResortData] = useState({
    img: '',
    img2: '',
    img3: '',
    img4: '',
    resortName: '',
    location: '',
    symbol: '',
    region: '',
    country: '',
    continent: '',
    description: '',
    onSite: '',
    nearby: '',
    contactInfo: '',
    nearestAirport: '',
    checkInDays: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { allResortData } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResortData({ ...resortData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setResortData((prevState) => ({
      ...prevState,
      checkInDays: checked
        ? [...prevState.checkInDays, value]
        : prevState.checkInDays.filter((day) => day !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_server_API}/add-resort`, resortData);

      Swal.fire({
        title: 'Success!',
        text: 'Resort data submitted successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
      });

      setResortData({
        img: '',
        img2: '',
        img3: '',
        img4: '',
        resortName: '',
        location: '',
        symbol: '',
        region: '',
        country: '',
        continent: '',
        description: '',
        onSite: '',
        nearby: '',
        contactInfo: '',
        nearestAirport: '',
        checkInDays: [],
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error submitting data:', error.response?.data || error.message);

      Swal.fire({
        title: 'Error!',
        text: 'Failed to submit data. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md">
      <div className="mb-4 text-center">
        <h1 className="text-2xl font-bold text-center">Add New Resort</h1>
        {/* <p className="font-bold">Total Resort: {allResortData.length}</p> */}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {['img', 'img2', 'img3','img4', 'resortName', 'location', 'symbol','region', 'country', 'continent', 'description'].map((field) => (
          <div key={field}>
            <label htmlFor={field} className="block text-gray-700 font-medium capitalize">
              {field === 'img' ? 'Image URL' : field.replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              id={field}
              name={field}
              type="text"
              placeholder={`Enter ${field}`}
              value={resortData[field]}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
        ))}

        {/* On-Site Activities */}
        <div>
          <label htmlFor="onSite" className="block text-gray-700 font-medium">
            On-Site Activities (Comma Separated)
          </label>
          <input
            id="onSite"
            name="onSite"
            type="text"
            placeholder="Enter on-site activities"
            value={resortData.onSite}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        {/* Nearby Attractions */}
        <div>
          <label htmlFor="nearby" className="block text-gray-700 font-medium">
            Nearby Attractions (Comma Separated)
          </label>
          <input
            id="nearby"
            name="nearby"
            type="text"
            placeholder="Enter nearby attractions"
            value={resortData.nearby}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label htmlFor="contactInfo" className="block text-gray-700 font-medium">
            Contact Information
          </label>
          <input
            id="contactInfo"
            name="contactInfo"
            type="text"
            placeholder="Enter contact information"
            value={resortData.contactInfo}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label htmlFor="nearestAirport" className="block text-gray-700 font-medium">
            Nearest Airport
          </label>
          <input
            id="nearestAirport"
            name="nearestAirport"
            type="text"
            placeholder="Enter nearest airport"
            value={resortData.nearestAirport}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Check-in Days</label>
          <div className="flex flex-wrap gap-2">
            {['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
              <label key={day} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={day}
                  checked={resortData.checkInDays.includes(day)}
                  onChange={handleCheckboxChange}
                  className="checkbox checkbox-primary"
                />
                <span>{day}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="w-full text-center">
          <button
            type="submit"
            className={`btn ${isSubmitting ? 'btn-disabled' : 'btn-primary'} w-full text-lg px-6 py-2 font-bold text-white bg-blue-500 hover:bg-blue-600 rounded-md`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputResortData;
