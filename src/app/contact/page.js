export default function Contact() {
  return (
    <div className="py-12 max-w-2xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Get In Touch</h1>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Email:</span>
          <a href="https://myaccount.google.com/?authuser=0" className="text-blue-600 hover:underline">
            manthankhotele7@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">GitHub:</span>
          <a href="https://github.com/MAKX-Dev" target="_blank" className="text-blue-600 hover:underline">
            github.com/MAKX-Dev
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Codeforces:</span>
          <a href="https://codeforces.com/profile/MAKX-Dev" target="_blank" className="text-blue-600 hover:underline">
            codeforces.com/profile/MAKX-Dev
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">LinkedIn:</span>
          <a href="https://www.linkedin.com/in/manthan-k-makx/" className="text-blue-600 hover:underline">
            linkedin.com/in/manthan-k-makx
          </a>
        </div>
      </div>
    </div>
  )
}