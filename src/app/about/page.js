export default function About() {
  return (
    <div className="py-12 max-w-3xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
      <div className="prose prose-lg">
        <p className="text-gray-700 mb-4">
          I’m a Information Technology undergraduate (1st year) focused on building strong fundamentals in Data Structures, Algorithms, and problem solving. I enjoy turning complex concepts into intuitive, interactive experiences through projects that emphasize clarity and learning-first design.
        </p>
        <p className="text-gray-700 mb-4">
         Currently, I’m deeply invested in mastering DSA through structured roadmaps and building real implementations alongside theory. My work reflects a strong focus on consistency, discipline, and long-term growth as a aspiring software engineer.
         I’m actively exploring open-source contributions and creating tools that help others learn faster while continuously improving my skills in frontend engineering, system thinking, and algorithmic problem solving.
        </p>
       
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold mb-2">Languages</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>JavaScript</li>
              <li>C++</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Technologies</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
