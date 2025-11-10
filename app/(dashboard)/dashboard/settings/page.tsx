import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { Card } from '@/components/ui/card'

export default async function SettingsPage() {
  const user = await currentUser()
  
  if (!user) {
    redirect('/sign-in')
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">⚙️ Settings</h1>

      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Profile Information</h2>
          <div className="space-y-3">
            <div>
              <span className="text-gray-600">Name:</span>{' '}
              <span className="font-medium">{user.firstName} {user.lastName}</span>
            </div>
            <div>
              <span className="text-gray-600">Email:</span>{' '}
              <span className="font-medium">{user.emailAddresses[0].emailAddress}</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Billing</h2>
          <p className="text-gray-600">Coming soon: Payment methods, invoices, and subscription management.</p>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">API Keys</h2>
          <p className="text-gray-600">Coming soon: Generate API keys for programmatic access.</p>
        </Card>
      </div>
    </div>
  )
}
