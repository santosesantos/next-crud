interface IProps {
  color?: "green" | "blue" | "gray";
  className?: string;
  onClick: (value: any) => void;
  children?: React.ReactNode;
}

export default function Button(props: IProps) {
  const gradientVariant = {
    "green": "from-green-400 to-green-700",
    "blue": "from-blue-400 to-blue-700",
    "gray": "from-gray-400 to-gray-700"
  }

  return (
    <button className={`
      bg-gradient-to-r ${gradientVariant[props.color ?? "gray"]}
      text-white py-2 px-4 rounded-md
      ${props.className}
    `} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
