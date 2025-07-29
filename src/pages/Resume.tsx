import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ResumeContent from "@/components/Resumecontetnt";
import CommonButton from "@/components/CommonButton";
import Navbar from "@/components/Navbar";

const Resume = () => {
  const resumeRef = useRef<HTMLDivElement | null>(null);

  // const downloadPDF = async () => {
  //   if (!resumeRef.current) return;

  //   const element = resumeRef.current;

  //   const canvas = await html2canvas(element, {
  //     scale: 2,
  //     useCORS: true,
  //     backgroundColor: '#ffffff',
  //     scrollY: -window.scrollY,
  //   });

  //   const imgData = canvas.toDataURL('image/jpeg', 0.9);
  //   const pdf = new jsPDF({
  //     orientation: 'portrait',
  //     unit: 'pt',
  //     format: 'a4',
  //   });

  //   const pageWidth = pdf.internal.pageSize.getWidth();
  //   const pageHeight = pdf.internal.pageSize.getHeight();
  //   const padding = 15;

  //   const imgProps = pdf.getImageProperties(imgData);
  //   const imgWidth = pageWidth - padding * 2;
  //   const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

  //   // If it fits on one page
  //   if (imgHeight <= pageHeight - padding * 2) {
  //     pdf.addImage(imgData, 'JPEG', padding, padding, imgWidth, imgHeight);
  //   } else {
  //     // Scale down to fit entire image in one page
  //     const scaledHeight = pageHeight - padding * 2;
  //     const scaledWidth = (imgProps.width * scaledHeight) / imgProps.height;

  //     const x = (pageWidth - scaledWidth) / 2;
  //     pdf.addImage(imgData, 'JPEG', x, padding, scaledWidth, scaledHeight);
  //   }

  //   pdf.save('download.pdf');
  // };

  const downloadPDF = async () => {
    if (!resumeRef.current) return;

    const element = resumeRef.current;

    resumeRef.current.style.color = "#000000"; // Example: replace text color
    resumeRef.current.style.backgroundColor = "#ffffff"; // Example: replace bg color

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      scrollY: -window.scrollY,
    });

    const imgProps = {
      width: canvas.width,
      height: canvas.height,
    };

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const padding = 20;

    const ratio = (pageWidth - padding * 2) / imgProps.width;
    const pageCanvasHeight = (pageHeight - padding * 2) / ratio;

    let renderedHeight = 0;
    let pageCount = 0;

    while (renderedHeight < imgProps.height) {
      // Create a new canvas for each page slice
      const pageCanvas = document.createElement("canvas");
      pageCanvas.width = imgProps.width;
      pageCanvas.height = Math.min(
        pageCanvasHeight,
        imgProps.height - renderedHeight
      );

      const pageCtx = pageCanvas.getContext("2d");
      if (!pageCtx) break;

      pageCtx.drawImage(
        canvas,
        0,
        renderedHeight,
        imgProps.width,
        pageCanvas.height,
        0,
        0,
        imgProps.width,
        pageCanvas.height
      );

      const imgData = pageCanvas.toDataURL("image/jpeg", 1.0);
      const imgHeightScaled = pageCanvas.height * ratio;

      if (pageCount > 0) pdf.addPage();
      pdf.addImage(
        imgData,
        "JPEG",
        padding,
        padding,
        pageWidth - padding * 2,
        imgHeightScaled
      );

      renderedHeight += pageCanvas.height;
      pageCount++;
    }

    pdf.save("Satyam-singh-chauhan.pdf");
  };

  return (
    <div className="relative ">
      {/* <div className="absolute bottom-11 right-[40%]">
        <CommonButton
          text="Download resume"
          variant="primary"
          onClick={() => downloadPDF()}
          size="sm"
        />
      </div> */}
      <Navbar />
      <div
        className="flex justify-center w-full flex-col gap-6 sm:p-10 p-2 max-sm:mt-4"
        ref={resumeRef}
      >
        <ResumeContent />
      </div>
    </div>
  );
};

export default Resume;
