import { io, Socket } from "socket.io-client";
import { UpdateHorarioHandler } from "./ClientHanclers";
// "connected" | "update" | "delete"

export const ClientEvents = {
  updateUser: "update-user",
  updateHorario: "update-horario",
  delete: "delete",
} as const;

type AllowedEvents = (typeof ClientEvents)[keyof typeof ClientEvents];

type ClientToServerEvents<T = any> = {
  [k in AllowedEvents]: (args: { userId: string; payload: T }) => void;
};
export const ServerEvents = {
  connected: "connected",
  updateHorarioResponse: "update-horario-response",
} as const;
type AllowedServerEvents = (typeof ServerEvents)[keyof typeof ServerEvents];
type ServerHandler<T = any> = (args: {
  status: "ok" | "notok";
  payload: T;
}) => void;
type ServerToClientEvents = {
  [k in AllowedServerEvents]: ServerHandler;
};
export default class SocketIO {
  static client: Socket<ServerToClientEvents, ClientToServerEvents> | null =
    null;
  static initSocket() {
    if (!this.client) {
      this.client = io("http://localhost:4000");
    }
  }
  static setSocketEventsListeners() {
    if (!this.client) return;
    this.client.on(ServerEvents.connected, ({ status, payload }) => {
      console.log({ status, payload });
    });
    this.client.on(ServerEvents.updateHorarioResponse, UpdateHorarioHandler);
  }
  static disconnect() {
    if (!this.client) return;
    this.client.disconnect();
  }
}
