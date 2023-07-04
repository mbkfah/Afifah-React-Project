export const Content = ({ nama, umur, alamat, imageurl, gender }) => {
  //   // const nama = "Afifah";
  //   // const user = {
  //   //   nama: "Afifah",
  //   //   umur: 24,
  //   //   alamat: "yogyakarta,Indonesia",
  // };
  if (gender === "p") {
    return (
      <div className="bg-sky-700">
        <img width={90} height={90} src={imageurl} />
        <div> Nama : {nama}</div>
        <div> Umur : {umur}</div>
        <div> Alamat : {alamat}</div>
        <div> Gender : {gender}</div>
      </div>
    );
  }
  return (
    <div className="blue">
      <img width={90} height={90} src={imageurl} />
      <div> Nama : {nama}</div>
      <div> Umur : {umur}</div>
      <div> Alamat : {alamat}</div>
      <div> Gender : {gender}</div>
    </div>
  );
};
