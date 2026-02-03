import React, { useState } from "react";
import { Heart } from "lucide-react";

export default function ValentineApp() {
  const [page, setPage] = useState(1);
  const [yesButtonSize, setYesButtonSize] = useState(1);

  const handleNoClick = () => {
    setYesButtonSize((prev) => prev + 0.3);
  };

  const handleYesClick = () => {
    setPage(4);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-pink-200 flex items-center justify-center p-4">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <Heart
          className="absolute top-10 left-10 text-pink-300 opacity-20 animate-pulse"
          size={40}
        />
        <Heart
          className="absolute top-20 right-20 text-red-300 opacity-20 animate-pulse"
          size={60}
          style={{ animationDelay: "0.5s" }}
        />
        <Heart
          className="absolute bottom-20 left-1/4 text-pink-400 opacity-20 animate-pulse"
          size={50}
          style={{ animationDelay: "1s" }}
        />
        <Heart
          className="absolute bottom-10 right-1/3 text-red-300 opacity-20 animate-pulse"
          size={45}
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
        {/* Page 1 */}
        {page === 1 && (
          <div className="text-center space-y-6 animate-fade-in">
            <div className="flex justify-center mb-4">
              <Heart
                className="text-red-500 animate-pulse"
                size={48}
                fill="currentColor"
              />
            </div>
            <img
              src="/mnt/user-data/uploads/ChatGPT_Image_Feb_3__2026__10_47_31_AM.png"
              alt="Sad character"
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
            />
            <button
              onClick={() => setPage(2)}
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-red-600 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              Continue 💕
            </button>
          </div>
        )}

        {/* Page 2 */}
        {page === 2 && (
          <div className="text-center space-y-6 animate-fade-in">
            <div className="flex justify-center mb-4">
              <Heart
                className="text-red-500 animate-pulse"
                size={48}
                fill="currentColor"
              />
            </div>
            <img
              src="/mnt/user-data/uploads/ChatGPT_Image_Feb_3__2026__10_57_45_AM.png"
              alt="Understanding character"
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
            />
            <button
              onClick={() => setPage(3)}
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-red-600 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              Next 💖
            </button>
          </div>
        )}

        {/* Page 3 */}
        {page === 3 && (
          <div className="text-center space-y-6 animate-fade-in">
            <div className="flex justify-center mb-4">
              <Heart
                className="text-red-500 animate-pulse"
                size={48}
                fill="currentColor"
              />
            </div>
            <img
              src="/public"
              alt="Valentine question"
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
            />
            <div className="flex flex-col items-center gap-4 pt-4">
              <button
                onClick={handleYesClick}
                style={{
                  transform: `scale(${yesButtonSize})`,
                  transition: "transform 0.3s ease",
                }}
                className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-red-600 shadow-lg hover:shadow-xl origin-center"
              >
                Yes 💝
              </button>
              <button
                onClick={handleNoClick}
                className="bg-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-400 transition-all shadow-md"
              >
                If they born you well, click no
              </button>
            </div>
          </div>
        )}

        {/* Page 4 - Success */}
        {page === 4 && (
          <div className="text-center space-y-6 animate-fade-in">
            <div className="flex justify-center gap-2 mb-4">
              <Heart
                className="text-red-500 animate-pulse"
                size={48}
                fill="currentColor"
              />
              <Heart
                className="text-pink-500 animate-pulse"
                size={48}
                fill="currentColor"
                style={{ animationDelay: "0.2s" }}
              />
              <Heart
                className="text-red-500 animate-pulse"
                size={48}
                fill="currentColor"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
            <h1 className="text-4xl font-bold text-red-500 mb-4">Yay! 🎉</h1>
            <video
              src="/public/uploads/catgif.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
            />
            <p className="text-2xl text-pink-600 font-semibold mt-4">
              Happy Valentine's Day! 💕
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
