import React, { useEffect, useRef, useState } from 'react';

const RESUME_PDF_URL = '/resume.pdf';
const RESUME_DOWNLOAD_NAME = 'MahdiMousaviCV.pdf';

const ResumeViewer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = RESUME_PDF_URL;
    link.download = RESUME_DOWNLOAD_NAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const pdfjsLib = await import('pdfjs-dist');
        pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
          'pdfjs-dist/build/pdf.worker.min.mjs',
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
        if (!cancelled) setError('Could not load the CV. Try the direct file instead.');
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-slate-100 transition-colors duration-500 dark:bg-slate-950">
      <header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-900">
        <a
          href="/"
          className="text-sm font-black tracking-tight text-slate-950 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
        >
          ← Mahdi Mosavi
        </a>
        <button
          onClick={handleDownload}
          className="inline-flex min-h-10 items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-black tracking-tight text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
        >
          Download CV
        </button>
      </header>

      <main className="flex flex-1 items-center justify-center overflow-auto p-4">
        {error ? (
          <div className="max-w-sm text-center text-slate-600 dark:text-slate-300">
            <p>{error}</p>
            <a href={RESUME_PDF_URL} className="mt-3 inline-block font-semibold text-blue-600 dark:text-blue-400">
              Open resume.pdf
            </a>
          </div>
        ) : (
          <canvas
            ref={canvasRef}
            className="h-auto w-auto max-h-[calc(100vh-6.5rem)] max-w-full rounded-lg bg-white shadow-xl"
          />
        )}
      </main>
    </div>
  );
};

export default ResumeViewer;
