import Image from "next/image";

interface ClubDetailCardProps {
  name: string;
  description: string;
    imageTop: string;      
  imageBottom: string;
  whatsappLink?: string;
  contactNumber?: string;
}

export default function ClubDetailCard({
  name,
  description,
  imageTop,
  imageBottom,
  whatsappLink,
  contactNumber,
}: ClubDetailCardProps) {
  return (
    <div className="relative max-w-4xl mx-auto bg-white rounded-xl shadow-2xl  overflow-visible min-h-[24rem] flex flex-col justify-center p-6 md:p-12">
      {/* LEFT BOTTOM DECORATION */}
      <Image
        src="/slantrectangle.png"
        alt=""
        width={138}  // adjust size as needed
        height={138}
        className="absolute -left-4 -bottom-12 pointer-events-none hidden md:block"
      />
      {/* RIGHT BOTTOM DECORATION */}
      <Image
        src="/triangle.png"
        alt=""
        width={250}  // adjust size as needed
        height={196}
        className="absolute right-0 bottom-0
    md:top-1/2 md:-translate-y-1/2 md:bottom-auto
    pointer-events-none"
      />

      <div className="grid grid-cols-1 md:grid-cols-2">
       {/* Image stack wrapper */}
      <div className="w-full flex justify-center px-6">
        {/* Overlap container */}
        <div className="relative w-[260px] h-[220px]">
          {/* Bottom image */}
          <Image
            src={imageBottom}
            alt={`${name} image bottom`}
            width={200}
            height={200}
            className="absolute bottom-0 right-0 rounded-lg object-cover"
          />

          {/* Top image */}
          <Image
            src={imageTop}
            alt={`${name} image top`}
            width={180}
            height={180}
            className="absolute top-0 left-0 z-10 rounded-lg object-cover "
          />
        </div>
      </div>


        {/* Content */}
        <div className="p-6 flex flex-col justify-center">
          <h1 className="text-2xl font-heading font-bold text-brand mb-3">
            {name}
          </h1>

          <p className="text-gray-700 mb-6">
            {description}
          </p>

          {/* Contact Info */}
          <div className="space-y-3">
            {whatsappLink && (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand text-white px-4 py-2 rounded-md w-fit hover:opacity-90"
              >
                Join WhatsApp Group
              </a>
            )}

            {contactNumber && (
              <p className="text-gray-800">
                📞 Contact:{" "}
                <span className="font-medium">{contactNumber}</span>
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
