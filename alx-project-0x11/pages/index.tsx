import { useState } from "react";

// Interface for ImageCard props
interface ImageCardProps {
  imageUrl: string;
  prompt: string;
  action: () => void;
}

// ImageCard component inside the same file
const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, prompt, action }) => {
  return (
    <div className="mt-6 flex flex-col items-center">
      <img src={imageUrl} alt={prompt} className="w-full max-w-md rounded-lg shadow-md" />
      <p className="mt-2 text-gray-700">{prompt}</p>
      <button
        onClick={action}
        className="mt-2 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Clear Image
      </button>
    </div>
  );
};

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = "/api/generate-image"; // You can change this if needed

  const handleGenerateImage = async () => {
    console.log("Generating Image");
    console.log(process.env.NEXT_PUBLIC_GPT_API_KEY);

    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setImageUrl(data.imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center w-full max-w-md">
        <h1 className="text-4xl font-bold mb-2">AI Image Generator</h1>
        <p className="text-lg text-gray-700 mb-4">
          Type a prompt and generate an AI image!
        </p>

        <input
          type="text"
          placeholder="Enter your prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
        />

        <button
          onClick={handleGenerateImage}
          className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          {isLoading ? "Loading..." : "Generate Image"}
        </button>
      </div>

      {imageUrl && (
        <ImageCard
          action={() => setImageUrl("")} // Clear image when clicked
          imageUrl={imageUrl}
          prompt={prompt}
        />
      )}
    </div>
  );
}