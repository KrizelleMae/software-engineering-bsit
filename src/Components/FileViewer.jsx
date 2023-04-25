import { Document, Page } from "react-pdf";
import { useParams } from "react-router-dom";

function PDFViewer() {
  const { file } = useParams();
  return (
    <Document file={file}>
      <Page pageNumber={1} />
    </Document>
  );
}

export default PDFViewer;
