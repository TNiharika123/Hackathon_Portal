import React, { useState } from 'react';

const Form = () => {
  const [hasParticipated, setHasParticipated] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    teamMembers: '',
    hasParticipated: '',
    projectIdeas: '',
    additionalComments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleRadioChange = (e) => {
    setFormData({ ...formData, hasParticipated: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the data in localStorage
    localStorage.setItem('hackathonRegistration', JSON.stringify(formData));
    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
  };
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
      <h1 className="mb-6 text-3xl font-semibold text-center text-gray-800">
        Hackathon Registration Form
      </h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="fName" className="text-sm font-medium text-gray-900 text-left">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              placeholder="First Name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lName" className="text-sm font-medium text-gray-900 text-left">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              placeholder="Last Name"
              required
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="flex flex-col w-1/2">
          <label htmlFor="email" className="text-sm font-medium text-gray-900 text-left">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            placeholder="example@example.com"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col  w-1/2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-900 text-left">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            placeholder="(000) 000-0000"
            required
          />
        </div>
        <div className="flex flex-col  w-1/2">
          <label htmlFor="address" className="mb-2 text-sm font-medium text-gray-900 text-left">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            required
          />
        </div>

        <div className="flex flex-col  w-1/2">
          <label htmlFor="institution" className="mb-2 text-sm font-medium text-gray-900  text-left">
            Institution/Company
          </label>
          <input
            type="text"
            id="institution"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            required
          />
        </div>

        <div className="flex flex-col  w-1/2">
          <label htmlFor="role" className="mb-2 text-sm font-medium text-gray-900 text-left">
            Role/Position
          </label>
          <input
            type="text"
            id="role"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            required
          />
        </div>

        <div className="flex flex-col  w-1/2">
          <label htmlFor="skills" className="mb-2 text-sm font-medium text-gray-900 text-left">
            Skills/Expertise
          </label>
          <input
            type="text"
            id="skills"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            required
          />
        </div>

        <div className="flex flex-col  w-1/2">
          <label htmlFor="teamName" className="mb-2 text-sm font-medium text-gray-900 text-left">
            Team Name
          </label>
          <input
            type="text"
            id="teamName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            required
          />
        </div>

        {/* Number of Team Members */}
        <div className="flex flex-col  w-1/2">
          <label htmlFor="teamMembers" className="text-sm font-medium text-gray-900  text-left">
            Number of Team Members
          </label>
          <input
            type="number"
            id="teamMembers"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            placeholder="e.g., 3"
          />
        </div>

        {/* Have you participated in a hackathon before? */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-900  text-left">
            Have you participated in a hackathon before?
          </label>
          <div className="flex items-center space-x-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="hasParticipated"
                value="yes"
                className="text-blue-600"
                checked={hasParticipated === 'yes'}
                onChange={() => setHasParticipated('yes')}
              />
              <span className="ml-2 text-gray-700">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="hasParticipated"
                value="no"
                className="text-blue-600"
                checked={hasParticipated === 'no'}
                onChange={() => setHasParticipated('no')}
              />
              <span className="ml-2 text-gray-700">No</span>
            </label>
          </div>
        </div>

        {/* Project Ideas */}
        <div className="flex flex-col">
          <label htmlFor="projectIdeas" className="text-sm font-medium text-gray-900 text-left">
            Briefly describe any project ideas or areas of interest for the hackathon
          </label>
          <textarea
            id="projectIdeas"
            rows="4"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            placeholder="Describe your ideas..."
          ></textarea>
        </div>

        {/* Additional Comments */}
        <div className="flex flex-col">
          <label htmlFor="comments" className="text-sm font-medium text-gray-900 text-left">
            Additional Comments
          </label>
          <textarea
            id="comments"
            rows="4"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            placeholder="Any additional information..."
          ></textarea>
        </div>

        {/* Consent and Agreement */}
        <div className="flex flex-col space-y-2">
          <p className="text-sm font-medium text-gray-900 text-left">Consent and Agreement</p>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="text-blue-600"
              required
            />
            <span className="ml-2 text-gray-700  text-left">
              Code of Conduct Agreement: I have read and agree to abide by the hackathon's code of conduct.
            </span>
          </label>
          <label className="flex items-center text-left">
            <input
              type="checkbox"
              className="text-blue-600"
              required
            />
            <span className="ml-2 text-gray-700">
              Photo/Video Release: I consent to the use of my photos/videos taken during the event for promotional purposes.
            </span>
          </label>
          <label className="flex items-center text-left">
            <input
              type="checkbox"
              className="text-blue-600"
              required
            />
            <span className="ml-2 text-gray-700">
              Liability Waiver: I understand and accept the risks associated with participating in the hackathon and release the organizers from any liability.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm py-2.5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;