import Client from "@/core/Client";
import { EditIcon, TrashIcon } from "./Icons";

interface IProps {
  clients: Client[];
  selectedClient?: (client: Client) => void;
  removeClient?: (client: Client) => void;
  children?: React.ReactNode;
}

export default function Table(props: IProps) {
  const isActions = props.selectedClient || props.removeClient;

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">ID</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Age</th>
        {isActions ? <th className="p-4">Actions</th> : false}
      </tr>
    )
  }

  function renderRows() {
    const rows = props.clients?.map((client, i) => {
      return (
        <tr key={client.id} className={`${i % 2 === 0 ? "bg-blue-200" : "bg-blue-100"}`}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {isActions ? renderActions(client) : false}
        </tr>
      );
    });

    return rows;
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center items-center">
        {props.selectedClient ? (
          <button onClick={() => props.selectedClient?.(client)} className={`
            flex justify-center items-center
            text-green-600 rounded-full p-2 m-1
            hover:bg-purple-50
          `}>{EditIcon}</button>
        ) : false}
        {props.removeClient ? (
          <button onClick={() => props.removeClient?.(client)} className={`
            flex justify-center items-center
            text-red-500 rounded-full p-2 m-1
            hover:bg-purple-50
          `}>{TrashIcon}</button>
        ) : false}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-blue-500 to-blue-800
      `}>
        {renderHeader()}
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  );
}