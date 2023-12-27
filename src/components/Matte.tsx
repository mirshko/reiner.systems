import { type ChangeEvent, useState } from "react";

async function applyMatteToImage(file: File, color: string) {
  const imageBitmap = await createImageBitmap(file);

  const { width, height } = imageBitmap;

  const maxDimension = Math.max(width, height);

  const canvas = document.createElement("canvas");

  canvas.width = maxDimension;
  canvas.height = maxDimension;

  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const x = canvas.width / 2 - width / 2;
  const y = canvas.height / 2 - height / 2;

  ctx.drawImage(imageBitmap, x, y, width, height);

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => (blob ? resolve(blob) : reject()), "image/jpeg", 1);
  });
}

export default function Matte() {
  const [color, colorSet] = useState<string>("#ffffff");
  const [rawFile, rawFileSet] = useState<File>();
  const [processedBlob, processedBlobSet] = useState<Blob>();

  const saveFile = () => {
    if (!processedBlob || !rawFile) {
      return;
    }

    const objectUrl = URL.createObjectURL(processedBlob);

    const anchor = document.createElement("a");
    anchor.href = objectUrl;
    anchor.download = rawFile.name;
    anchor.click();

    URL.revokeObjectURL(objectUrl);
  };

  const clearFile = () => {
    rawFileSet(undefined);
    processedBlobSet(undefined);
  };

  const handleFiles = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.item(0);

    if (!file) {
      return;
    }

    rawFileSet(file);

    const blob = await applyMatteToImage(file, color);

    processedBlobSet(blob);
  };

  const handleColor = async (event: ChangeEvent<HTMLInputElement>) => {
    colorSet(event.target.value);
  };

  return (
    <div className="flex flex-col gap-8 items-center font-sans">
      <div className="relative md:p-[75px] w-96 h-96 md:w-[40rem] md:h-[40rem] flex">
        {processedBlob ? (
          <img
            className="object-contain aspect-square w-full h-full"
            alt=""
            src={URL.createObjectURL(processedBlob)}
          />
        ) : (
          <label
            htmlFor="file-upload"
            className="w-full h-full object-contain flex items-center justify-center relative group cursor-pointer"
            style={{ backgroundColor: color }}
          >
            <span className="sr-only">Uploaded File Preview</span>
            <input
              id="file-upload"
              accept="image/png, image/jpeg"
              type="file"
              className="sr-only"
              onChange={handleFiles}
            />
            <svg
              className="h-full aspect-[3/4] border-4 border-gray-300 bg-gray-50 text-gray-300 group-hover:text-gray-400 group-hover:border-gray-400 group-hover:bg-gray-100 group-focus-within:text-gray-400
              group-focus-within:border-gray-400
              group-focus-within:bg-gray-100"
              preserveAspectRatio="none"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 200 200"
              aria-hidden="true"
            >
              <path
                vectorEffect="non-scaling-stroke"
                strokeWidth={4}
                d="M0 0l200 200M0 200L200 0"
              />
            </svg>
          </label>
        )}
      </div>

      {processedBlob ? (
        <span className="isolate inline-flex rounded-md shadow-sm">
          <button
            className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onClick={saveFile}
          >
            Save
          </button>

          <button
            className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onClick={clearFile}
          >
            Clear
          </button>
        </span>
      ) : (
        <label
          className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 font-mono cursor-pointer"
          htmlFor="color"
        >
          <span>{color}</span>
          <input
            className="sr-only"
            id="color"
            type="color"
            value={color}
            onChange={handleColor}
          />
        </label>
      )}
    </div>
  );
}
