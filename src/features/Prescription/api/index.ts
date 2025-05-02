export const fetchPrescriptions = async () => {
  const res = await fetch(`http://localhost:3000/api/prescriptions`);
  return res.json();
};
