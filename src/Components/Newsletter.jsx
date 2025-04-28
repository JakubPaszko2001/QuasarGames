import { useState, useEffect } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1200); // delikatne opóźnienie
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("EMAIL", email);

      await fetch("https://YOUR_BREVO_FORM_URL", {
        method: "POST",
        body: formData,
      });

      setSent(true);
      setEmail("");
      setTimeout(() => setIsOpen(false), 4000); // zamyka modal po 4 sekundach
    } catch (error) {
      console.error("Błąd podczas wysyłania:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn">
      <div className="w-[90vw] max-w-2xl p-10 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-2xl shadow-2xl flex flex-col items-center gap-8 animate-zoomIn">
        {!sent ? (
          <>
            <h2 className="text-3xl font-bold text-white tracking-wide text-center">
              Enter the Abyss
            </h2>
            <p className="text-gray-300 text-center">
              Subscribe to unlock ancient secrets and exclusive updates.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-3 rounded-lg w-full text-black border border-gray-300 focus:ring-2 focus:ring-[#FFBF8D]"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-bold text-black bg-[#FFBF8D] hover:bg-[#ffcba0] transition duration-300"
              >
                Join Now
              </button>
            </form>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 underline text-sm mt-4"
            >
              No thanks
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-3xl font-bold text-white">Thank you!</h2>
            <p className="text-gray-300 text-center">You have entered the Abyss.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
