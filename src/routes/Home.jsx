import bg from "../assets/bg.png";

const Home = () => {
  return (
    <div className="flex flex-col py-12 px-28">
      <div className="flex justify-between items-center">
        <div className="flex flex-col text-center items-center">
          <h1 className="text-6xl font-bold tracking-widest text-green-600 pb-12">
            FLEHITNA
          </h1>
          <p className="text-gray-800 w-10/12 leading-7">
            Créative, intelligent et coopérer c'est facile aujourd'hui à
            atteindre avec la collaboration tunisienne des agriculteurs,
            ingénieurs et vétérinaires pour développer votre produit agricole.
          </p>
        </div>

        <img src={bg} alt="olive" width={460} className="rounded-3xl" />
      </div>
      <div className="pt-16 text-center ">
        <h2 className="text-2xl text-green-900">
          La platform tunisienne pour la colaboration agréculif.
        </h2>
        <button className="mt-10 px-10 bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-3xl text-lg">
          Rejoignez nous!
        </button>
      </div>
    </div>
  );
};

export default Home;
