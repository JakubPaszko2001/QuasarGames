import { useState, useEffect } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowToast(true); // pokaż toast od razu
    setEmail("");
    setSent(true); // zmień stan formularza
  
    // Zamknij po 4 sekundach
    setTimeout(() => {
      setShowToast(false);
      setIsOpen(false);
    }, 2500);
  
    // Spróbuj wysłać dane w tle, ale nie blokuj reszty
    try {
      const formData = new FormData();
      formData.append("EMAIL", email);
    
      await fetch(
        "https://sibforms.com/serve/MUIFAB7xyLWW_70vV5NbactX8lK3_SK9LJoHsaGvxjiUa3Fv-Hh1Gkl72BgbMXYtacP8Q5uAIcdjtUj3er8HChf3vOGccEzj0pS36sHQfKO564GCiPp64qGzyIG4SE35ylSqkP4hfqGaibs-AexM_8leZXq5hJ5l7laLiL4QWER937bJEpCU_7-J_keNqHU6WWJUBF6fLxIvC6YR",
        {
          method: "POST",
          body: formData,
          redirect: "follow", // ważne!
        }
      );
    } catch (error) {
      console.error("Błąd przy wysyłaniu do Brevo:", error);
      // tu możesz opcjonalnie pokazać drugi toast z błędem
    }
  };
  

  if (!isOpen) return null;

  return (
    <>
      {showToast && (
        <div className="fixed top-0 right-0 bg-green-500 text-white !px-6 !py-4 rounded shadow-lg flex items-start gap-3 animate-fade-in !z-100">
          <div className="text-2xl leading-6">✅</div>
          <div>
            <p className="font-bold">Subscribed</p>
            <p className="text-sm">You have successfully joined the Abyss newsletter.</p>
          </div>
        </div>
      )}

      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="w-[90vw] max-w-2xl p-10 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-2xl shadow-2xl flex flex-col items-center !py-8 animate-zoomIn">
          {!sent ? (
            <>
              <h2 className="text-3xl font-bold text-white tracking-wide text-center !pb-2">
                Enter the Abyss
              </h2>
              <p className="text-gray-300 text-center !pb-12">
                Subscribe to unlock ancient secrets and exclusive updates.
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-full justify-center items-center"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="!p-3 rounded-lg w-2/3 text-white border border-gray-300 focus:ring-2 focus:ring-[#FFBF8D]"
                />
                <button
                  type="submit"
                  className="w-1/3 !py-2 rounded-lg font-bold text-black bg-white hover:bg-[#ffcba0] transition duration-300 cursor-pointer"
                >
                  Join Now
                </button>
              </form>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 underline text-sm !mt-4 cursor-pointer"
              >
                No thanks
              </button>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-bold text-white">Thank you!</h2>
              <p className="text-gray-300 text-center">
                You have entered the Abyss.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Newsletter;
