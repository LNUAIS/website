import Image from "next/image";
import logo from "./logo-infinity.png";

export function Mark({ className }: { className?: string }) {
  return (
    <Image src={logo} alt="LNU AI Society" priority className={className} />
  );
}
