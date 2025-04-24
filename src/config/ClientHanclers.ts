export function UpdateHorarioHandler({
  status,
  payload,
}: {
  status: "ok" | "notok";
  payload: { horario: string };
}) {
  if (status != "ok") {
    console.log("the operation couldnt be done");
  } else {
    console.log({ horario: payload.horario });
  }
}
