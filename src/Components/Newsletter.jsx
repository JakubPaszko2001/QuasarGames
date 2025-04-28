import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj wyślesz email do systemu newsletterowego
    console.log("Wysyłanie e-maila:", email);
    setEmail(""); // czyści pole po wysłaniu
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="p-2 rounded-md border border-gray-300 w-64"
      />
      <button
        type="submit"
        className="bg-[#FFBF8D] text-black px-6 py-2 rounded-md hover:bg-[#ffcba0] transition"
      >
        Subscribe
      </button>
    </form>
  );
};

export default Newsletter;
