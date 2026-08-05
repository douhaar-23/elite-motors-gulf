import { useEffect, useState } from "react";
import { showroom } from "@/config/showroom";
import { dealership } from "@/config/dealership";

type LogoProps = {
  size?: number;
  variant?: "square" | "horizontal";
};

export default function Logo({
  size = 48,
  variant = "square",
}: LogoProps) {
  const logo =
    variant === "horizontal"
      ? showroom.logoHorizontal
      : showroom.logoSquare;

  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [logo]);

  if (!error && logo) {
    return (
      <div
        className="shrink-0 overflow-hidden"
        style={{
          width: variant === "horizontal" ? size * 3.4 : size,
          height: size,
        }}
      >
        <img
          src={logo}
          alt=""
          className="h-full w-full object-contain"
          onError={() => setError(true)}
        />
      </div>
    );
  }

  return (
    <div
      className="grid shrink-0 place-items-center rounded-lg border border-gold/40 bg-surface"
      style={{
        width: size,
        height: size,
      }}
    >
      <span className="gold-text text-xl font-black">
        {dealership.logoLetter}
      </span>
    </div>
  );
}8