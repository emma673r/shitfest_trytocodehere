import Bands from "./Bands";

function BandList(props) {
  return (
    <main className="BandList">
      {props.bands.map((band) => (
        <Bands key={band.name} band={band} />
      ))}
    </main>
  );
}

export default BandList;
