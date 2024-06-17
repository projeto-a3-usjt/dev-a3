import { io } from "socket.io-client";

const urlWebSocket = "http://localhost:3001";
export const socket = io(urlWebSocket, {
  autoConnect: false,
  reconnection: false,
});

export async function connectWebSocket(mesa) {
  try {
    socket.connect();
    socket.emit("mesas", mesa);
  } catch (e:any) {
    alert("Erro ao Chamar atendente!");
  }
}

// socket.on("connect_error", (error) => {
//   alert("Erro de conexão: ", error);
// });
