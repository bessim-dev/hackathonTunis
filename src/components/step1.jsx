const step1 = () => {
    return (

<div className="bg-white px-6 py-8 rounded shadow-md text-black w-full flex flex-col items-center">
<h1 className="mb-8 text-3xl text-center">Step1</h1>
<input
  type="text"
  className="block border border-grey-light w-full p-3 rounded mb-4 shadow-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
  name="fullname"
  placeholder="Full Name"
/>

<input
  type="text"
  className="block border border-grey-light w-full p-3 rounded mb-4 shadow-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
  name="email"
  placeholder="Email"
/>

<input
  type="password"
  className="block border border-grey-light w-full p-3 rounded mb-4 shadow-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
  name="password"
  placeholder="Password"
/>
<select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600">
  <option>Agriculteur</option>
  <option>Ingénieur</option>
  <option>Vétérinaire</option>
</select>
<button
  type="submit"
  className="mt-4 px-8 bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-3xl text-lg"
>
  Continue
</button>
</div>
 );
};