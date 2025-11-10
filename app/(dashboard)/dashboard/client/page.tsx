import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default async function ClientDashboardPage() {
  const user = await currentUser()
  
  if (!user) {
    redirect('/sign-in')
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Welcome back, {user.firstName}! 👋</h1>
          <p className="text-gray-600 mt-2 text-lg">Upload files to start annotating with AI</p>
        </div>
        <Button size="lg" className="text-lg px-8">
          📤 Upload New Task
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-white">
          <div className="text-sm text-gray-600 font-medium">Total Tasks</div>
          <div className="text-4xl font-bold mt-2">0</div>
          <div className="text-xs text-gray-500 mt-1">All time</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-green-50 to-white">
          <div className="text-sm text-gray-600 font-medium">Completed</div>
          <div className="text-4xl font-bold mt-2 text-green-600">0</div>
          <div className="text-xs text-gray-500 mt-1">✅ Auto-approved</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-yellow-50 to-white">
          <div className="text-sm text-gray-600 font-medium">Processing</div>
          <div className="text-4xl font-bold mt-2 text-blue-600">0</div>
          <div className="text-xs text-gray-500 mt-1">⚡ In progress</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-white">
          <div className="text-sm text-gray-600 font-medium">Total Spent</div>
          <div className="text-4xl font-bold mt-2">£0.00</div>
          <div className="text-xs text-gray-500 mt-1">💰 This month</div>
        </Card>
      </div>

      {/* Tasks Table */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-6">📋 My Tasks</h2>
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🎯</div>
          <p className="text-xl text-gray-600 mb-4">No tasks yet!</p>
          <p className="text-gray-500 mb-6">Upload your first file to get started with AI annotation</p>
          <Button size="lg">
            📤 Upload First Task
          </Button>
        </div>
      </Card>

      {/* Quick Tips */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <Card className="p-6 bg-blue-50">
          <h3 className="font-bold mb-2">⚡ Tip: Enable Instant Annotation</h3>
          <p className="text-sm text-gray-700">
            Get 50% of your annotations auto-approved in under 1 minute with 95% accuracy!
          </p>
        </Card>
        <Card className="p-6 bg-green-50">
          <h3 className="font-bold mb-2">💰 Tip: Bulk Discounts</h3>
          <p className="text-sm text-gray-700">
            Upload &gt;1000 items and get 15% off automatically. Save even more!
          </p>
        </Card>
      </div>
    </div>
  )
}
