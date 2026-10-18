import React, { useEffect, useRef, useState } from 'react';

const RESUME_PDF_URL = '/resume.pdf';
const RESUME_DOWNLOAD_NAME = 'MahdiMosaviResume.pdf';

// Draws the first page of the CV on a canvas so the whole page is always visible.
const ResumeViewer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    document.title = 'Mahdi Mosavi CV';
    let cancelled = false;

    (async () => {
      try {
        // The legacy build works in more browsers (the normal build needs very new JavaScript features).
        const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
        pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
          'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
          import.meta.url
        ).toString();

        const doc = await pdfjsLib.getDocument({ url: RESUME_PDF_URL }).promise;
        const page = await doc.getPage(1);
        if (cancelled) return;

        const viewport = page.getViewport({ scale: 2.5 });
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (!canvas || !context) return;

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvas, canvasContext: context, viewport }).promise;
      } catch (err) {
        console.error('Could not show the CV', err);
        if (!cancelled) setError(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="resume">
      <p>
        <a href="/">mahdiportfolio.com</a>
        <a href={RESUME_PDF_URL} download={RESUME_DOWNLOAD_NAME}>
          Download PDF
        </a>
      </p>
      {error ? (
        <p>
          The CV could not be shown here. <a href={RESUME_PDF_URL}>Open the PDF</a> instead.
        </p>
      ) : (
        <canvas ref={canvasRef} aria-label="CV of Mahdi Mosavi" />
      )}
    </div>
  );
};

export default ResumeViewer;
