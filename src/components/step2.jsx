const step2 = () => {
    return (


<div className="bg-white px-6 py-8 rounded shadow-md text-black w-full flex flex-col items-center">

<h1 className="mb-8 text-3xl text-center">Step2</h1>
<input
  type="text"
  className="block border border-grey-light w-full p-3 rounded mb-4 shadow-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
  name="Bio"
  placeholder="Bio"
/>
<input
  type="text"
  className="block border border-grey-light w-full p-3 rounded mb-4 shadow-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
  name="Adress"
  placeholder="Adress"
/>

<input
  type="number"
  className="block border border-grey-light w-full p-3 rounded mb-4 shadow-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
  name="Numero de telephone"
  placeholder="Numero de telephone"
/>

<button
  type="submit"
  className="mt-4 px-8 bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-3xl text-lg"
>
  Créer un compte
</button>
</div>
  );
};