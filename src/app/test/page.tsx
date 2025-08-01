export default function TestPage() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          🎾 PlayPal Bookings
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Test page - if you can see this, the app is working!
        </p>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Next Steps:</h2>
          <ul className="text-left space-y-2">
            <li>✅ Next.js app running</li>
            <li>✅ Tailwind CSS working</li>
            <li>✅ TypeScript compiling</li>
            <li>⏳ Database setup needed</li>
            <li>⏳ Authentication setup needed</li>
          </ul>
        </div>
      </div>
    </div>
  )
}