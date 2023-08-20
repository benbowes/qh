import Image from "next/image";

export const Header = () => (
  <header>
    <Image
      src="/images/qantas-logo.png"
      className="pt-10 pb-8"
      alt="Qantas Logo"
      width={206}
      height={40}
      priority
    />
  </header>
);
