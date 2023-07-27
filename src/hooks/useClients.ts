import { useState, useEffect } from 'react';
import Client from "@/core/Client";
import ClientRep from "@/core/ClientRep";
import ClientCollection from "@/firebase/db/ClientCollection";

export default function useClients() {
  const repo: ClientRep = new ClientCollection();

  const [client, setClient] = useState<Client>(Client.empty());
  const [clientArray, setClientArray] = useState<Client[]>([]);
  const [isTable, setIsTable] = useState(true);

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then(clientArray => {
      setClientArray(clientArray);
      setIsTable(true);
    });
  }

  function selectClient(client: Client) {
    setClient(client);
    setIsTable(false);
  }

  async function removeClient(client: Client) {
    await repo.remove(client);
    getAll();
  }

  function newClient() {
    setClient(Client.empty());
    setIsTable(false);
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAll();
  }

  return {
    client,
    clientArray,
    isTable,
    selectClient,
    removeClient,
    newClient,
    saveClient,
    getAll
  }
}