const About = () => {
  return (
    <section className=" flex flex-col gap-4 text-center">
  
      <div className="flex flex-col gap-6 bg-mint-800 text-white mx-2 sm:mx-6 lg:mx-20 px-4 py-6 sm:px-10 lg:px-20 rounded-lg mb-6">
        <h1 className="text-3xl sm:text-4xl font-brand">Our Story </h1>
        <p className="text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto text-gray-800">
          BrainBloom was inspired by a child with ADHD who achieved remarkable progress through neuroscience-based tools. Seeing that success firsthand ignited our mission to bring similar resources to families everywhere — and to include youth voices in our design process.

        </p>
        </div>

      <div className="flex flex-col gap-6 bg-purple text-white mx-2 sm:mx-6 lg:mx-20 px-4 py-6 sm:px-10 lg:px-20 rounded-lg mb-6">
        <h1 className="text-3xl sm:text-4xl font-brand">Meet Our Youth Advisory Circle</h1>
      <p className="text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto text-gray-800">
        We’re proud to include the perspectives of young people directly in our work. Our Youth Inspiration & Advisor (a child with ADHD) and our Peer Learning Advisor (a sibling without ADHD) help guide the design and ensure BrainBloom’s tools are fun, inclusive, and effective.
      </p>
    </div>
    
    </section>
  );
};

export default About;
