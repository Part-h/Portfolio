import React from "react";

function MyResume() {
    
    const handleDownload = () => {
        // You can replace this URL with the actual URL of your PDF file
        const pdfUrl = "./pdf/cv.pdf";
      
        // Using fetch API to download the PDF
        fetch(pdfUrl)
          .then((response) => response.blob())
          .then((blob) => {
            // Create a temporary URL for the blob
            const url = window.URL.createObjectURL(new Blob([blob]));
            // Create a link element
            const link = document.createElement("a");
            // Set the href attribute to the temporary URL
            link.href = url;
            // Set the download attribute to specify the file name
            link.setAttribute("download", "cv.pdf");
            // Simulate clicking the link to trigger the download
            document.body.appendChild(link);
            link.click();
            // Clean up by removing the link and revoking the temporary URL
            link.parentNode.removeChild(link);
            window.URL.revokeObjectURL(url);
          })
          .catch((error) => {
            console.error("Error downloading PDF:", error);
          });
      };

      return(
    <section id="MyResume" className="ResumeSection">
        <div className="ResumeSectionContent">
            <span> CHECK OUT MY RÉSUMÉ!</span>
            <a class="resume-btn" onClick={handleDownload} target="_blank">Grab A Copy</a>
        </div>
    </section>
)
}

export default MyResume;