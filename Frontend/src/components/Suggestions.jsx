import { useState } from "react";
import './NavBar.css'

export default function Suggestions() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phoneNumber: "", suggestion: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    else if (!/^\d{10,15}$/.test(formData.phoneNumber.replace(/[^0-9]/g, ''))) newErrors.phoneNumber = "Phone number must be 10-15 digits";
    if (!formData.suggestion.trim()) newErrors.suggestion = "Suggestion is required";
    else if (formData.suggestion.length < 10) newErrors.suggestion = "Suggestion must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setSubmitting(true);
    setSubmitStatus(null);
    try {
      // Mock API call for demonstration
      await new Promise(resolve => setTimeout(resolve, 1000));
      // const response = await fetch("http://localhost:8000/api/suggestions/", { ... });
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", phoneNumber: "", suggestion: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-stone-300 py-20 px-4" id="suggestions">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl text-black font-bold" id="logo">Suggestions & Contact</h2>
          <p className="text-lg text-gray-800 mt-4 max-w-3xl mx-auto">
            Have a question or a suggestion? Reach out, and let's craft the perfect solution with our tools and services.
          </p>
        </div>

        {/* Main responsive container */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Side: Form */}
          <div className="lg:w-3/5 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl text-black font-bold mb-6">Fill in the form below</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full">
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={`w-full rounded-lg p-3 bg-stone-100 border ${errors.firstName ? "border-red-500" : "border-gray-300"}`} placeholder="First Name" />
                  {errors.firstName && <span className="text-red-500 text-sm mt-1">{errors.firstName}</span>}
                </div>
                <div className="w-full">
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={`w-full rounded-lg p-3 bg-stone-100 border ${errors.lastName ? "border-red-500" : "border-gray-300"}`} placeholder="Last Name" />
                  {errors.lastName && <span className="text-red-500 text-sm mt-1">{errors.lastName}</span>}
                </div>
              </div>
              <div>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full rounded-lg p-3 bg-stone-100 border ${errors.email ? "border-red-500" : "border-gray-300"}`} placeholder="Email" />
                {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
              </div>
              <div>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className={`w-full rounded-lg p-3 bg-stone-100 border ${errors.phoneNumber ? "border-red-500" : "border-gray-300"}`} placeholder="Phone Number" />
                {errors.phoneNumber && <span className="text-red-500 text-sm mt-1">{errors.phoneNumber}</span>}
              </div>
              <div>
                <textarea name="suggestion" value={formData.suggestion} onChange={handleChange} className={`w-full rounded-lg p-3 bg-stone-100 h-32 border ${errors.suggestion ? "border-red-500" : "border-gray-300"}`} placeholder="Your Suggestion..." />
                {errors.suggestion && <span className="text-red-500 text-sm mt-1">{errors.suggestion}</span>}
              </div>
              <button type="submit" disabled={submitting} className="w-full py-3 text-center text-white bg-gray-800 rounded-lg text-xl font-bold shadow-lg transition-colors hover:bg-black disabled:bg-gray-400">
                {submitting ? "Submitting..." : "Submit"}
              </button>
              {submitStatus === "success" && <p className="text-green-600 font-bold text-center">Suggestion submitted successfully!</p>}
              {submitStatus === "error" && <p className="text-red-600 font-bold text-center">Failed to submit. Please try again.</p>}
            </form>
          </div>

          {/* Right Side: Contact Info */}
          <div className="lg:w-2/5 space-y-8">
            <InfoCard icon={<InfoIcon />} title="Knowledgebase" text="Browse through all of our Knowledgebase articles." linkText="Visit our Database" linkUrl="https://www.kaggle.com/datasets/priyadharshanm0403/xenhance-final-dataset"/>
            <InfoCard icon={<ChatIcon />} title="FAQ" text="Explore our FAQ for quick, clear answers to common queries." linkText="Visit FAQ" />
            <InfoCard icon={<MailIcon />} title="Contact us by email" text="Prefer the written word? Drop us an email at: priyadharshanm0403@gmail.com"  />
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for the info cards on the right
const InfoCard = ({ icon, title, text, linkText, linkUrl }) => (
  <div className="flex items-start gap-4">
    <div className="text-gray-800 mt-1">{icon}</div>
    <div>
      <h3 className="text-xl text-black font-bold">{title}</h3>
      <p className="text-lg text-gray-800">{text}</p>
      {linkUrl && (
        <a
          href={linkUrl}
          target={linkUrl.startsWith("http") ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="text-lg text-blue-600 flex items-center gap-2 font-bold group hover:underline mt-1 inline-block"
        >
          {linkText}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right transition-transform group-hover:translate-x-1" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>
        </a>
      )}
    </div>
  </div>
);

// SVG Icons as components
const InfoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/></svg>;
const ChatIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882zM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765z"/></svg>;
