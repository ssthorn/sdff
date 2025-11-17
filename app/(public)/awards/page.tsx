//app/(public)/awards/page.tsx

import Image from "next/image";
import fs from "fs";
import path from "path";

const page = async () => {
  // Helper function to get sorted image files from a directory
  const getSortedImages = (directory: string, folderName: string): string[] => {
    const files = fs
      .readdirSync(directory)
      .filter((file) => file.endsWith(".jpg"))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    return files.map((file) => `/${folderName}/${file}`);
  };

  //directory path
  //public/awards/AWARD LAURELS San Diego Independent Film Fest

  // Define the directories and get sorted images
  const laurels1Directory = path.join(
    process.cwd(),
    "public/awards/AWARD LAURELS San Diego Independent Film Fest"
  );
  const laurels1Images = getSortedImages(
    laurels1Directory,
    "awards/AWARD LAURELS San Diego Independent Film Fest"
  );
  const awardsFigmaRef = path.join(process.cwd(), "public/awards");
  const awardsFigmaRefImages = getSortedImages(awardsFigmaRef, "awards");
  return (
    <div>
      {/* Header Section */}
      <div className='px-4 py-12 mt-20'>
      <div>
            {awardsFigmaRefImages.map((image, index) => (
              <div
                key={index}
                className='relative w-full aspect-1/1 flex items-center justify-center'
              >
                <Image
                  src={image}
                  alt={`Refimage ${index}`}
                  fill
                  className='object-contain'
                />
              </div>
            ))}
          </div>
        <h1 className='text-red-600 text-7xl font-dccash tracking-wider text-center'>
          AWARD WINNER LAURELS
        </h1>
      </div>

      {/* Grid Wrapper for Laurels 1 */}
      <div className='w-screen flex justify-center'>
        <div className='w-full max-w-6xl'>
          {/* First Image in Its Own Row */}
          {laurels1Images.length > 0 && (
            <div className='flex justify-center py-4'>
              <div className='relative w-full max-w-xs aspect-4/3'>
                <Image
                  src={laurels1Images[0]}
                  alt='Laurel 1'
                  fill
                  className='object-contain'
                />
              </div>
            </div>
          )}

          {/* Remaining Grid Images */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-6'>
            {laurels1Images.slice(1).map((image, index) => (
              <div
                key={index}
                className='relative w-full aspect-4/3 flex items-center justify-center'
              >
                <Image
                  src={image}
                  alt={`Laurel ${index}`}
                  fill
                  className='object-contain'
                />
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default page;
