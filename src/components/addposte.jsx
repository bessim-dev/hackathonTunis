const AddPost = () => {
    return (
        <form>
  <div className="bg-indigo-50 min-h-screen md:px-20 pt-6">
    <div className=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
      <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">ADD POST</h1>
      <div className="space-y-4">
        <div>
          <label for="title" className="text-lx font-serif">Titre:</label>
          <input type="text" placeholder="title" id="title" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
        </div>
        <div>
          <label for="description" className="block mb-2 text-lg font-serif">Description:</label>
          <textarea id="description" cols="30" rows="10" placeholder="ecrire ici.." className="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"></textarea>
        </div>
        <button className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-green-500 hover:bg-green-600  ">Publier</button>
      </div>
    </div>
  </div>
</form>
    );
    };
    export default AddPost;