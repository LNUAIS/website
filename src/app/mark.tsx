import Image from "next/image";
import logo from "../../public/logo-infinity.png";

// ponytail: the source art is gold-on-black with no alpha, so `screen` drops
// the black against the dark page — same trick the design canvas used.
// Only works on a dark ground; key out the black if it ever needs a light one.
export function Mark({ className }: { className?: string }) {
  return (
    <Image
      src={logo}
      alt="LNU AI Society"
      priority
      className={`mix-blend-screen ${className ?? ""}`}
    />
  );
}
