export function formatSecondsToMinutes(seconds: number) {
  const minutesMod = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondsMod = String(Math.floor(seconds % 60)).padStart(2, '0');
  return `${minutesMod}:${secondsMod}`;
}
