import clsx from "clsx";
import "../styles/input.css";

type HeaderProps = {
  title: string;
  size?: "sm" | "md" | "lg";
  extraClassNames?: string;
};

const Header = ({
  title,
  size = "md",
  extraClassNames,
}: HeaderProps): JSX.Element => {
  return (
    <div
      className={clsx(
        { "text-1xl my-1 font-medium": size === "sm" },
        { "text-2xl my-2 font-semibold": size === "md" },
        { "text-3xl my-2 font-bold": size === "lg" },
        `${extraClassNames}`,
      )}
    >
      {title}
    </div>
  );
};

export default Header;
