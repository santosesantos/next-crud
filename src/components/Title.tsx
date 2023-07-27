interface IProps {
  children?: React.ReactNode;
}

export default function Title(props: IProps) {
  return (
    <div className={`
      flex flex-col justify-center
    `}>
      <h1 className={`
        px-5 py-2
        text-2xl
      `}>{props.children}</h1>
      <hr className="border-2 border-blue-500"/>
    </div>
  );
}