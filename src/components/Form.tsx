import { useState } from 'react';
import Client from "@/core/Client";
import Input from "./Input";
import Button from "./Button";

interface IProps {
  client: Client;
  alterClient?: (client: Client) => void;
  cancel: (value: any) => void;
  children?: React.ReactNode;
}

export default function Form(props: IProps) {
  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? 0);

  return (
    <div className={`flex flex-col gap-3`}>
      {id ? (
        <Input text="ID" value={id} readOnly={true}/>
      ) : false}
      <Input text="Name" value={name} setValue={setName}/>
      <Input text="Age" type="number" value={age} setValue={setAge}/>
      <div className="flex justify-end gap-3">
        <Button color="blue" onClick={() => props.alterClient?.(new Client(name, age, id))}>
          {id ? "Update" : "Create"}
        </Button>
        <Button onClick={props.cancel}>Cancel</Button>
      </div>
    </div>
  );
}