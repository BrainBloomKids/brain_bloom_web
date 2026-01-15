import LearningBlocks from '../assets/learningBlocks.svg';

const Home = () => {
  return (
    <section className=" flex flex-col gap-4 text-center">
      <div className="flex flex-col gap-6 bg-purple text-white mx-24  px-20 py-10 rounded-lg mb-6 ">
       <h1 className="text-4xl font-brand">Welcome to BrainBloomKids!</h1>
      

      

      <p className="text-lg max-w-2xl mx-auto text-gray-800">
        BrainBloomKids is a nonprofit organization dedicated to empowering youth with ADHD to reach their full potential. We design neuroscience-based games and applications that make it easier for kids to strengthen memory, attention, processing, and communication skills — all while having fun.
      </p>
     
      </div>
      <div className="flex flex-col gap-6 bg-mint-800 text-white mx-24  px-20 py-10 rounded-lg mb-6">
        <h1 className="text-4xl font-brand">Growing</h1>
         <img src={LearningBlocks} alt="Blocks " className="w-95 h-85 mx-auto -mb-10 "/>
      </div>
    </section>
  );
};

export default Home;
