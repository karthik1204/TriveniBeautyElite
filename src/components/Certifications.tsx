import React, { useState } from 'react';
import { Award, BookOpen, Users, X } from 'lucide-react';

interface EnrollmentForm {
  name: string;
  email: string;
  phone: string;
  course: string;
  experience: string;
  message: string;
}

const Certifications = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<EnrollmentForm>({
    name: '',
    email: '',
    phone: '',
    course: '',
    experience: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = encodeURIComponent(
      `New Training Enrollment Request:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Course: ${formData.course}\n` +
      `Experience: ${formData.experience}\n` +
      `Message: ${formData.message}`
    );

    window.open(`https://wa.me/16292570686?text=${whatsappMessage}`, '_blank');
    setShowForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      experience: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-16 bg-gray-50" id="certifications">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Training & Certification</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-pink-600 mb-4 flex justify-center">
              <Award className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">Professional Certification</h3>
            <p className="text-gray-600 text-center">
              Get certified in beauty and wellness with our comprehensive training programs. Our certifications are recognized industry-wide.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-pink-600 mb-4 flex justify-center">
              <BookOpen className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">Expert Training</h3>
            <p className="text-gray-600 text-center">
              Learn from industry experts with years of experience. Our hands-on training approach ensures you master the latest techniques.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-pink-600 mb-4 flex justify-center">
              <Users className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">Career Support</h3>
            <p className="text-gray-600 text-center">
              Get placement assistance and ongoing support to build your career in the beauty industry.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => setShowForm(true)}
            className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Enroll Now
          </button>
        </div>

        {/* Enrollment Form Modal */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowForm(false)}></div>
            <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-8 m-4 animate-modal-slide-up">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">Enroll for Training</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Course Interest</label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  >
                    <option value="">Select a course</option>
                    <option value="Basic Beauty Course">Basic Beauty Course</option>
                    <option value="Advanced Beauty Course">Advanced Beauty Course</option>
                    <option value="Professional Makeup">Professional Makeup</option>
                    <option value="Hair Styling">Hair Styling</option>
                    <option value="Nail Art">Nail Art</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Prior Experience</label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  >
                    <option value="">Select experience level</option>
                    <option value="No Experience">No Experience</option>
                    <option value="Beginner">Beginner (0-1 year)</option>
                    <option value="Intermediate">Intermediate (1-3 years)</option>
                    <option value="Advanced">Advanced (3+ years)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold
                             hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Submit Enrollment
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;