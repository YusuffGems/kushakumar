import portraitB from "@/assets/portrait-b.jpg";

export function HoverPortrait() {
return ( <div className="relative mx-auto w-full max-w-[420px] aspect-[3/4] overflow-hidden rounded-3xl"> <img
     src={portraitB}
     alt="Profile Photo"
     className="w-full h-full object-cover"
   /> </div>
);
}
