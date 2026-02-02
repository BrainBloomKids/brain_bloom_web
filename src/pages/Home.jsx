import LearningBlocks from '../assets/learningBlocks.svg';

const Home = () => {
  return (
    <section className=" flex flex-col gap-4 text-center">

      <div className="flex flex-col gap-6 bg-purple text-white mx-24  px-20 py-10 rounded-lg mb-6 ">
        <h1 className="text-4xl font-brand">Welcome to BrainBloomKids!</h1>
        <p className="text-2xl max-w-2xl mx-auto text-gray-800">
          Helping Kids with ADHD Grow Strong Minds Through Play and Science
        </p>
        {/* <iframe
          className="airtable-embed mx-auto"
          src="https://airtable.com/embed/appxmtJTnY98F4L9q/pagQjhh5JsP0NCz56/form"
          frameBorder="0"
          width="80%"
          height="533"
          style={{ background: "purple", border: "1px solid #ccc", borderRadius: "6px" }}
        ></iframe> */}
        <form 
          action="https://buttondown.com/api/emails/embed-subscribe/brainbloomkids" 
          method="post" 
          target="popupwindow"
          referrerpolicy="unsafe-url" 
          className="flex flex-col gap-4" 
        > 
          <span className="text-2xl text-gray-800">Subscribe to our newsletter, we will keep you updated on our latest developments!</span> 
          <input type="email" name="email" placeholder="Your email" required className="border p-3 rounded text-black" /> 
          <button type="submit" className="bg-mint-900 text-white px-6 py-3 rounded font-semibold" >
            Subscribe 
          </button>
        </form>

      </div>

      <div className="flex flex-col gap-6 bg-yellow text-white mx-24  px-20 py-10 rounded-lg m-6 ">
        <h1 className="text-4xl font-brand">What is BrainBloomKids?</h1>
        <p className="text-2xl max-w-2xl mx-auto text-gray-800">
          BrainBloomKids is a nonprofit organization dedicated to empowering youth with ADHD to reach their full potential. We design neuroscience-based games and applications that make it easier for kids to strengthen memory, attention, processing, and communication skills — all while having fun.
        </p>
      </div>

      <div className="flex flex-col bg-mint-800 text-white mx-24 my-auto px-20 py-20 rounded-lg items-center justify-center mb-6">
          {/* 
           */}
           <img src={LearningBlocks} alt="Blocks" className="w-[820px] h-auto mx-auto bg-red-500/30" />
        </div>




      <div className="flex flex-col gap-6 bg-purple text-white mx-24  px-20 py-10 rounded-lg mb-6 itens-center">
       <h1 className="text-4xl font-brand">Who is BrainBloomKids for?</h1>
      <p className="text-2xl max-w-2xl mx-auto text-gray-800">
        A world where every child with ADHD has access to playful, evidence-based tools that nurture focus, confidence, and lifelong learning. It is an app for anyone who wants their child or student to improve their foundational learning skills (pyramid).
      </p>
    </div>


    <div className="flex flex-col gap-6 bg-yellow text-white mx-24  px-20 py-10 rounded-lg mb-6 ">
      <h1 className="text-4xl font-brand">Core Values</h1>
      <ul className="space-y-2 text-left mx-auto w-fit md:px-20 md:py-10">
  <li className="grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-x-3 gap-y-2">
    <span className="text-2xl font-semibold whitespace-nowrap">Innovation with Purpose:</span>
    <span className="text-2xl text-gray-800">
      We combine cutting-edge science with creative design to make tools that truly help.
    </span>
  </li>

  <li className="grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-x-4 gap-y-2">
    <span className="text-2xl font-semibold">Empowerment:</span>
    <span className="text-2xl text-gray-800">
      We believe children with ADHD deserve resources that build their strengths and confidence.
    </span>
  </li>

  <li className="grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-x-4 gap-y-2">
    <span className="text-2xl font-semibold">Accessibility:</span>
    <span className="text-2xl text-gray-800">
      Our tools are designed to be affordable, inclusive, and easy for families and educators to use.
    </span>
  </li>

  <li className="grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-x-4 gap-y-2">
    <span className="text-2xl font-semibold">Collaboration:</span>
    <span className="text-2xl text-gray-800">
      We work hand-in-hand with scientists, educators, parents, and youth to shape everything we create.
    </span>
  </li>

  <li className="grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-x-4 gap-y-2">
    <span className="text-2xl font-semibold">Evidence & Integrity:</span>
    <span className="text-2xl text-gray-800">
      Every game and application is rooted in solid research and ethical practices.
    </span>
  </li>
</ul>
</div>
      
    </section>
  );
};

export default Home;
