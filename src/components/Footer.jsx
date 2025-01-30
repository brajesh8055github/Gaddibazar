import { FaFacebookF, FaTwitter, FaPinterestP, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const socialIcons = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaPinterestP />, link: "#" },
    { icon: <FaYoutube />, link: "#" },
  ];

  const footerLinks = [
    {
      title: "Top Brands",
      items: [
        "MARUTI SUZUKI",
        "MAHINDRA",
        "HYUNDAI",
        "TATA MOTORS",
        "TOYOTA",
        "HONDA",
        "KIA",
        "RENAULT",
        "NISSAN",
        "VOLKSWAGEN",
        "SKODA",
        "MORRIS GARAGES",
      ],
    },
    {
      title: "Top Cities",
      items: [
        "Chennai",
        "Bangalore",
        "New Delhi",
        "Mumbai",
        "Hyderabad",
        "Kolkata",
        "Cochin",
        "Chandigarh",
        "Ahmedabad",
        "Pune",
        "Lucknow",
        "Jaipur",
      ],
    },
    {
      title: "Loans from Chola",
      items: [
        "Car Loan",
        "Two Wheeler Loan",
        "Commercial Vehicle Loan",
        "Construction Equipment Loan",
        "Tractor Loan",
        "Home Loan",
        "Personal Loan",
        "Secured Loan",
        "SME Loan",
        "Loan Against Property",
      ],
    },
  ];

  const bottomLinks = [
    "Blog",
    "About Us",
    "Privacy Policy",
    "Terms of Service",
    "Sitemap",
    "FAQ",
  ];

  return (
    <footer className="bg-gray-50 text-gray-700 text-sm mt-10">
      {/* Upper Section */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Social Media */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="font-medium">Get in touch</span>
          {socialIcons.map((item, index) => (
            <a key={index} href={item.link} className="text-gray-600 hover:text-blue-600 cursor-pointer text-lg">
              {item.icon}
            </a>
          ))}
        </div>

       {/* Info Sections (Flexbox - Responsive) */}
{/* <div className="flex flex-col md:flex-row flex-wrap gap-6"> */}
<div>
  {footerLinks.map((section, index) => (
    <div key={index} className="w-full">
      <p className="py-2">
        <span className="font-medium">{section.title}:</span>{" "}
        {section.items.join(" / ")}
      </p>
    </div>
  ))}
</div>



        {/* Support */}
        <p className="mt-4">
          <span className="font-medium">Support:</span> Call:{" "}
          <a href="tel:18001024565" className="text-blue-500 hover:underline">
            1800-102-4565
          </a>{" "}
          Email:{" "}
          <a
            href="mailto:customercare@chola.murugappa.com"
            className="text-blue-500 hover:underline"
          >
            customercare@chola.murugappa.com
          </a>{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Grievance Redressal
          </a>
        </p>
      </div>

      {/* Bottom Section */}
      <div className="bg-blue-900 text-white text-center text-xs py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between px-6">
          <p>© Copyright GaadiBazaar 2025. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-3">
            {bottomLinks.map((link, index) => (
              <a key={index} href="#" className="hover:underline">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
