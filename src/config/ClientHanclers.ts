export function UpdateHorarioHandler({
  clientId,
  ok,
  payload,
}: {
  clientId: string;
  ok: boolean;
  payload: { horario: string };
}) {
  if (!ok) {
    console.log("the operation couldnt be done");
  } else {
    console.log({ horario: payload.horario, clientId });
  }
}
