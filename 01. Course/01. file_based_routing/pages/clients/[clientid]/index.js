import { useRouter } from "next/router";

export default function ClientsProjectPage() {
  const router = useRouter();

  const loadProjectHandler = () => {
    //router.push("/clients/atesz/projecta");
    router.push({
      pathname: "/clients/[clientid]/[clientprojectid]",
      query: { clientid: "atesz", clientprojectid: "projecta" },
    });
  };

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  );
}
