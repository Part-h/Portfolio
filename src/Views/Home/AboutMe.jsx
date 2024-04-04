import React from "react";

class AboutMe extends React.Component {
  // Function to handle the download action
  handleDownload = () => {
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

  render() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/about-me.jpg" alt="About me" />
        </div>
        <div className="hero--section--content--boxabout--section--box">
          <div className="about--section--content">
            <h1 className="about--section--heading">About Me</h1>
            <p className="hero--section-description">
              
              Embark on an exciting digital journey with me, worked as a Full
              Stack Developer with over 2 years of experience. With a Master's
              degree from renowned and exposure to different cultures, I bring adaptability
              and a global perspective to my work. I excel at blending front-end
              design with back-end functionality, bringing digital projects to
              life with every line of code. 
            </p>
            <p className="hero--section-description">
              Trusted for my commitment to
              excellence and integrity, I deliver innovative solutions that
              resonate with clients and colleagues alike. Join me in shaping the
              future of technology, one step at a time.
            </p>

            <div class="banner-search-select">
              <button type="submit" onClick={this.handleDownload}>
                {" "}
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMe;
