import LearningBlocks from '../assets/learningBlocks.svg';

const Home = () => {
  return (
    <section className="flex flex-col gap-1 text-center">

      <div className="flex flex-col gap-6 bg-purple text-white mx-2 sm:mx-6 lg:mx-20 px-4 py-6 sm:px-10 lg:px-20 rounded-lg mb-6">
        <h1 className="text-3xl sm:text-4xl font-brand">Welcome to BrainBloomKids!</h1>

        <p className="text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto text-gray-800">
          Helping Kids with ADHD Grow Strong Minds<br/> Through Play and Science
        </p>

        <form 
          action="https://buttondown.com/api/emails/embed-subscribe/brainbloomkids"
          method="post"
          target="popupwindow"
          referrerPolicy="unsafe-url"
          className="flex flex-col gap-4"
        >
          <span className="text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto text-gray-800">
            Subscribe to our newsletter, we will keep you updated on our latest developments!
          </span>

          <input 
            type="email" 
            name="email" 
            placeholder="Your email" 
            required 
            className="border p-3 rounded text-black" 
          />

          <button 
            type="submit" 
            className="bg-mint-900 text-white px-6 py-3 rounded font-semibold"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="flex flex-col gap-6 bg-yellow text-white mx-2 sm:mx-6 lg:mx-20 px-4 py-6 sm:px-10 lg:px-20 rounded-lg mb-6">
        <h1 className="text-3xl sm:text-4xl font-brand">What is BrainBloomKids?</h1>
        <p className="text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto text-gray-800">
          BrainBloomKids is a nonprofit organization dedicated to empowering youth with ADHD to reach their full potential. We design neuroscience-based games and applications that make it easier for kids to strengthen memory, attention, processing, and communication skills — all while having fun.
        </p>
      </div>

    {/* <div className="flex flex-col gap-6 bg-mint-800 text-white mx-2 sm:mx-6 lg:mx-20 px-4 py-10 sm:px-10 lg:px-20 rounded-lg items-center justify-center mb-6"> */}
       <div className="flex flex-col gap-6 bg-mint-800 text-white mx-2 sm:mx-6 lg:mx-20 px-4 py-6 sm:px-10 lg:px-20 rounded-lg mb-6">
        <h1 className="text-3xl sm:text-4xl font-brand">Our Approach</h1>

        <img 
          src={LearningBlocks} 
          alt="Blocks" 
          className="w-full max-w-[820px] h-auto mx-auto"
        />
      </div>




      {/* <div className="flex flex-col gap-6 bg-purple text-white mx-2 md:mx-18 lg:mx-20 px-20 py-10 rounded-lg mb-6 itens-center"> */}
      <div className="flex flex-col gap-6 bg-purple text-white mx-2 sm:mx-6 lg:mx-20 px-4 py-6 sm:px-10 lg:px-20 rounded-lg mb-6">
       <h1 className="text-3xl sm:text-4xl font-brand">Who is BrainBloomKids for?</h1>
      <p className="text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto text-gray-800">
        A world where every child with ADHD has access to playful, evidence-based tools that nurture focus, confidence, and lifelong learning. It is an app for anyone who wants their child or student to improve their foundational learning skills (pyramid).
      </p>
    </div>


    {/* <div className="flex flex-col gap-6 bg-yellow text-white  mx-1 md:mx-18 lg:mx-20  px-1 py-1 rounded-lg mb-6 "> */}
    <div className="flex flex-col gap-6 bg-yellow text-white mx-2 sm:mx-6 lg:mx-20 px-4 py-6 sm:px-10 lg:px-20 rounded-lg mb-6">
      <h1 className="text-3xl sm:text-4xl font-brand">Core Values</h1>
      <ul className="space-y-2 text-left mx-auto w-fit md:px-20 md:py-10">
  <li className="grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-x-3 gap-y-2">
    <span className="text-lg sm:text-xl lg:text-2xl max-w-2xl font-semibold whitespace-nowrap">Innovation with Purpose:</span>
    <span className="text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto text-gray-800">
      We combine cutting-edge science with creative design to make tools that truly help.
    </span>
  </li>

  <li className="grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-x-4 gap-y-2">
    <span className="text-lg sm:text-xl lg:text-2xl max-w-2xl font-semibold whitespace-nowrap">Empowerment:</span>
    <span className="text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto text-gray-800">
      We believe children with ADHD deserve resources that build their strengths and confidence.
    </span>
  </li>

  <li className="grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-x-4 gap-y-2">
    <span className="text-lg sm:text-xl lg:text-2xl max-w-2xl font-semibold whitespace-nowrap">Accessibility:</span>
    <span className="text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto text-gray-800">
      Our tools are designed to be affordable, inclusive, and easy for families and educators to use.
    </span>
  </li>

  <li className="grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-x-4 gap-y-2">
    <span className="text-lg sm:text-xl lg:text-2xl max-w-2xl font-semibold whitespace-nowrap">Collaboration:</span>
    <span className="text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto text-gray-800">
      We work hand-in-hand with scientists, educators, parents, and youth to shape everything we create.
    </span>
  </li>

  <li className="grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-x-4 gap-y-2">
    <span className="text-lg sm:text-xl lg:text-2xl max-w-2xl font-semibold whitespace-nowrap">Evidence & Integrity:</span>
    <span className="text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto text-gray-800">
      Every game and application is rooted in solid research and ethical practices.
    </span>
  </li>
</ul>
</div>
      
    </section>
  );
};

export default Home;
