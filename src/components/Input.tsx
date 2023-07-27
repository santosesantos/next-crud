interface IProps {
  text: string;
  type?: "text" | "number";
  value: any;
  setValue?: (value: any) => void;
  children?: React.ReactNode;
  readOnly?: boolean
}

export default function Input(props: IProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-4">
        {props.text}
      </label>
      <input className={`
        border border-purple-500 rounded-lg
        focus:outline-none bg-white py-2 px-4
        ${ props.readOnly ? "bg-gray-200" : "focus:bg-gray-100"}
      `} type={props.type ?? "text"} value={props.value} readOnly={props.readOnly} onChange={(evt) => props.setValue?.(evt.target.value)}/>
    </div>
  );
}