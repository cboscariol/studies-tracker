export function timeToSeconds(time: string) {
  const [hour = "0", minuts = "0", seconds = "0"] = time.split(":");

  const hourAsSeconds = Number(hour) * 3600;
  const minutsAsSeconds = Number(minuts) * 60;

  return hourAsSeconds + minutsAsSeconds + Number(seconds)
}
