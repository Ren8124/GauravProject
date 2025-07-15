"use client";

export default function ImageScroll() {
  const images = [
    { src: "/acci1.png" },
    { src: "/acci2.png" },
    { src: "/acci3.png" },
    { src: "/acci4.png" },
    { src: "/forcefeeder.png", animation: "animate-wiggle" },
  ];

  return (
    <div className="w-full overflow-hidden bg-white dark:bg-black py-12">
      <div className="relative group">
        <div className="flex animate-infinite-scroll gap-8">
          {[...images, ...images].map((image, idx) => (
            <div
              key={idx}
              className={`
                flex-shrink-0 
                w-[336px] 
                h-[220px] 
                rounded-xl 
                overflow-hidden 
                shadow-lg 
                relative
                transition-transform duration-300 hover:scale-105
                ${image.animation}
              `}
            >
              <img
                src={image.src}
                alt={`scroll-img-${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
