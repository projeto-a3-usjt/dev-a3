import { io } from "socket.io-client";

const urlWebSocket = "http://localhost:3001";
export const socket = io(urlWebSocket, {
  autoConnect: false,
  reconnection: false,
});

export async function connectWebSocket() {
  try {
    socket.connect();
    socket.emit("mesa01", "Cliente Chamando na Mesa 01");
  } catch (e:any) {
    alert("Erro ao Chamar atendente!");
  }
}

// socket.on("connect_error", (error) => {
//   alert("Erro de conexão: ", error);
// });
