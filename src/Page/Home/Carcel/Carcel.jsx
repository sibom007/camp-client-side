const Carcel = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-zinc-200   p-8 rounded-lg shadow-md">
      <div className="md:w-1/2 p-4">
        <h2 className="text-blue-600 text-lg font-bold">Adventure Campus</h2>
        <h1 className="text-3xl font-bold text-gray-800 mt-2">Inquire</h1>
        <p className="text-gray-600 mt-4 text-lg">
          Completing an inquiry form on a school’s website is a quick and easy
          way to signal that your family is interested in applying and would
          like to learn more. Inquiry forms are often optional, but we recommend
          that you complete this step as soon as you’re comfortable engaging in
          admission conversations.
        </p>
        <p className="text-gray-600 mt-4 text-lg">
          Why? Because the sooner you contact the school, the more time you have
          to establish a relationship with its admission team, giving you an
          advantage over families that come into the process later.
        </p>
      </div>
      <div className="md:w-1/2  flex justify-center p-4">
        <img
          src="https://cdn.prod.website-files.com/642ed84f45d235b659bd2c46/64921bb4137f1685077f2df4_TASIS%20England%201.webp"
          alt="Smiling student raising hand in class"
          className="rounded-lg   w-[500px] h-[500px]"
        />
      </div>
    </div>
  );
};

export default Carcel;
