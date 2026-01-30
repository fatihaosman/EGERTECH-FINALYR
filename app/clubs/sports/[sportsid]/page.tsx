export default async function SportsDetails({
  params,
} :{
  params: Promise<{ sportsid: string }>;
}) {
  const sportsid = (await params).sportsid;
  return <h1>each sports club details {sportsid}</h1>;
}