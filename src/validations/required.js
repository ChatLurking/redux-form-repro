export default function required(value) {
  if (!value) return "Required";
  if (value === "") return "Required";
}
