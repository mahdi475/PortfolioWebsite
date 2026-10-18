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
          import.meta.url,
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
    <div className="flex min-h-screen flex-col bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-900">
        <a href="/" className="font-display text-sm font-extrabold hover:text-blue-600 dark:hover:text-blue-400">
          Mahdi Mosavi
        </a>
        <a
          href={RESUME_PDF_URL}
          download={RESUME_DOWNLOAD_NAME}
          className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700"
        >
          Download PDF
        </a>
      </header>

      <main className="flex flex-1 items-center justify-center p-4">
        {error ? (
          <p className="text-center">
            The CV could not be shown here.{' '}
            <a href={RESUME_PDF_URL} className="font-semibold text-blue-600 dark:text-blue-400">
              Open the PDF
            </a>{' '}
            instead.
          </p>
        ) : (
          <canvas
            ref={canvasRef}
            aria-label="CV of Mahdi Mosavi"
            className="h-auto max-h-[calc(100vh-6.5rem)] w-auto max-w-full rounded-lg bg-white shadow"
          />
        )}
      </main>
    </div>
  );
};

export default ResumeViewer;
