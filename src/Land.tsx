import { Grid } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "./components/ui/button";
import SocketIO, { ClientEvents } from "./config/socket.io.config";
import axios from "axios";
export default function Land() {
  return (
    <div className="flex gap-4">
      <p>welcome</p>
      <NavLink
        className="p-4 bg-yellow-200 text-black border-2 border-black cursor-pointer"
        to={"/service-worker.js"}
      >
        install
      </NavLink>
      <Button className="cursor-pointer" onClick={postRequest}>
        Post request
      </Button>
      <Button
        className="cursor-pointer"
        onClick={() => {
          console.log("clicked");
          SocketIO.client?.emit(ClientEvents.updateHorario, {
            userId: "myid",
            payload: { name: "myname" },
          });
        }}
      >
        Send Message to server
      </Button>
      <Grid />
    </div>
  );
  async function postRequest() {
    const response = await axios.post("http://localhost:4000", {
      name: "cristhian guerrero",
    });
    const data = response.data;
    console.log({ data });
  }
}
