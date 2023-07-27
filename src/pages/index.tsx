import Button from "@/components/Button";
import Form from "@/components/Form";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "@/core/Client";
import useClients from '@/hooks/useClients';

export default function Home() {
  const { client, clientArray, isTable, selectClient,
    removeClient, getAll, newClient, saveClient} = useClients();

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-700 to-green-600
      text-white
    `}>
      <Layout title="Simple CRUD">
        {isTable ? (
          <>
            <div className="flex justify-end">
              <Button className="mb-4" color="green" onClick={newClient}>New Client</Button>
            </div>
            <Table clients={clientArray} selectedClient={selectClient} removeClient={removeClient} />
          </>
        ) : (
          <Form client={client} cancel={getAll} alterClient={saveClient} />
        )}
      </Layout>
    </div>
  );
}
