// import Image from "next/image";

// export default function HomePage() {
//   return (
//     <section className="w-full min-h-screen bg-white flex justify-center">
//       <div className="relative max-w-6xl w-full  py-6 flex items-center lg:items-start">
// {/* flex-col lg:flex-row */}
//         {/* LEFT: IMAGE + OVERLAY + TEXT */}
//         <div className="relative  w-full w-[90%] sm:w-[85%]  lg:w-[calc(50%+300px)] h-[300px] sm:h-[340px] lg:h-[440px] rounded-lg z-10">

//           {/* Egerton image */}
//           <Image
//             src="/image 34.png"
//             alt="Egerton University"
//             fill
//             className="object-cover"
//             priority
//           />

//           {/* Overlay */}
//           <Image
//             src="/Rectangle 42 (1).png"
//             alt="Overlay"
//             fill
//             className="object-cover"
//           />

//           {/* Text */}
//           <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-18 ">
//             <h1 className="text-lg sm:text-xl lg:text-2xl font-heading font-semibold mb-3 text-brand">

//               Your Campus, All in One Place
//             </h1>

//             <p className="text-xs sm:text-sm lg:text-base leading-relaxed max-w-md text-black">

//               Stay updated with everything that matters—events, club activities,
//               important notices, and opportunities—all gathered in one organized
//               space. Explore what’s happening around you, discover new interests,
//               and stay connected with your campus community through a simple,
//               fast, and accessible platform.
//             </p>
//           </div>
//         </div>

//         {/* RIGHT: SOLID + TOP IMAGE */}
//         <div className="relative flex items-center justify-center  -ml-[120px]  sm:-ml-[160px] lg:-ml-[230px] z-20 mt-6 lg:mt-0">

//           {/* Solid shape */}
//           <Image
//             src="/solid.png"
//             alt="Solid shape"
//             width={500}
//             height={360}
//             className="sm:w-[400px] lg:w-[500px]"
//           />

//           {/* Center image */}
//           <Image
//             src="/top.png"
//             alt="Egerton Gate"
//             width={360}
//             height={360}
//             className="absolute sm:w-[200px] lg:w-[360px]"
         
//           />
//         </div>

//       </div>
//     </section>
//   );
// }



import Image from "next/image";

export default function HomePage() {
  return (
    <section className="w-full bg-white flex justify-center mt-5 mb-8">
      
      {/* HERO CONTAINER (same width as navbar) */}
      <div className="relative w-full max-w-6xl h-[300px] sm:h-[380px] lg:h-[460px]">

        {/* BACKGROUND IMAGE (already includes overlay + solid) */}
        <Image
          src="/Group 119.png" // <-- your combined image
          alt="Campus Hero Background"
          fill
          className="object-cover rounded-lg"
          priority
        />

        {/* LEFT: TEXT */}
         <div className="absolute left-6 sm:left-10 lg:left-14 top-1/2 -translate-y-1/2 max-w-md">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-heading font-semibold mb-3 text-brand">
            Your Campus, All in One Place
          </h1>

          <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-black">
            Stay updated with everything that matters—events, club activities,<br />
            important notices, and opportunities—all gathered in one organized  <br />
            space. Explore what’s happening around you and stay connected with <br />
            your campus community.
          </p>
        </div> 

        {/* RIGHT: TOP IMAGE */}
        <div className="absolute lg:right-[12%] md:right-[8%] sm:right-[6%] right-[6%] top-1/2 -translate-y-1/2">
          <Image
            src="/top.png"
            alt="Egerton Gate"
            width={360}
            height={360}
            className="w-[200px] sm:w-[220px] md:w-[280px] lg:w-[380px]"
          />
        </div>

      </div>
    </section>
  );
}


// | Prefix        | Screen width (starts at) |
// | ------------- | ------------------------ |
// | *(no prefix)* | **0px → ∞**              |
// | `sm:`         | **640px and up**         |
// | `md:`         | **768px and up**         |
// | `lg:`         | **1024px and up**        |
// | `xl:`         | **1280px and up**        |
// | `2xl:`        | **1536px and up**        |

