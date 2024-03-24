
export function TransformTimestampToDatetime(timestampms) {
  let d = new Date(timestampms);
  return d.toLocaleString();
}