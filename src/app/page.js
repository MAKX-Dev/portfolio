export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Hi, I'm Manthan Khotele
      </h1>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
        Aspiring Full Stack Developer | Competetive Programmer
        <br />
        Building scalable web applications and solving algorithmic challenges
      </p>
      <div className="flex gap-4">
        <a href="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          View Projects
        </a>
        <a href="/contact" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
          Contact Me
        </a>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 mt-16">
        <div className="text-center">
         <a href="https://codeforces.com/profile/MAKX-Dev" className="text-3xl font-bold text-blue-600"><div>820+</div></a>
          <div className="text-gray-600">CF Rating</div>
        </div>
        <div className="text-center">
          <a href="https://codeforces.com/profile/MAKX-Dev" className="text-3xl font-bold text-blue-600"><div>50+</div></a>
          <div className="text-gray-600">Competitive Programming Problems Solved</div>
        </div>
        <div className="text-center">
          <a href="https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" className="text-3xl font-bold text-blue-600"><div>200+</div></a>
          <div className="text-gray-600">DSA Problems Solved</div>
        </div>
        <div className="text-center">
           <a href="https://github.com/MAKX-Dev" className="text-3xl font-bold text-blue-600"><div>2+</div></a>
          <div className="text-gray-600">Projects Deployed</div>
        </div>
      </div>
    </div>
  )
}