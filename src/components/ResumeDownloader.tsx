// import React, { useState } from "react";
// import CommonButton from "./CommonButton";
// import resume from "../assets/projects/Satyam-singh-chauhan.pdf";

// const ResumeDownloader = () => {
//   const [loading, setLoading] = useState(false);

//   const handleDownload = async () => {
//     setLoading(true);

//     try {
//       // Optional loading delay
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       const link = document.createElement("a");
//       link.href = "/assets/projects/Satyam-singh-chauhan.docx";
//       link.download = "Satyam-singh-chauhan.docx";
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } catch (error) {
//       console.error("Download failed", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="animate-glow rounded-3xl">
//       <CommonButton
//         onClick={handleDownload}
//         text={loading ? "Downloading..." : "Download Resume"}
//         disabled={loading}
//         size="sm"
//         variant="primary"
//       />
//     </div>
//   );
// };

// export default ResumeDownloader;

import React, { useState } from "react";
import CommonButton from "./CommonButton";
import resume from "../assets/projects/satyam-singh-chauhan.pdf"; // Import path is correct

const ResumeDownloader = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Smooth loading

      const link = document.createElement("a");
      link.href = resume; // <-- Use imported URL here
      link.download = "Satyam-singh-chauhan.pdf"; // Correct file name and extension
      link.click();
    } catch (error) {
      console.error("Download failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-glow rounded-3xl">
      <CommonButton
        onClick={handleDownload}
        text={loading ? "Downloading..." : "Download Resume"}
        disabled={loading}
        size="sm"
        variant="primary"
      />
    </div>
  );
};

export default ResumeDownloader;
