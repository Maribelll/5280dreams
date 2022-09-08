import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";

export default function Rental() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
      <Viewer
        fileUrl={
          "https://res.cloudinary.com/dzpwjmq0x/image/upload/v1662549990/rent/pdf/Sacajawea_Estates_kxd0xy.pdf"
        }
        plugins={[defaultLayoutPluginInstance]}
      />
    </Worker>
  );
}
