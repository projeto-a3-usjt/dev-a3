import { io } from "socket.io-client";

const urlWebSocket = "http://localhost:3001";
export const socket = io(urlWebSocket, {
  autoConnect: false,
  reconnection: false,
});

socket.on("connect_error", (error) => {
  console.log("Erro de conexão: ", error);
});
