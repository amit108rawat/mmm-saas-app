import { useAuthStore } from '../stores/authStore'
import { BarChart3, TrendingUp, DollarSign, Users } from 'lucide-react'

const stats = [
  {
    name: 'Total Campaigns',
    value: '12',
    change: '+4.75%',
    changeType: 'positive',
    icon: BarChart3,
  },
  {
    name: 'Total Spend',
    value: '$89,400',
    change: '+54.02%',
    changeType: 'positive',
    icon: DollarSign,
  },
  {
    name: 'Avg. ROAS',
    value: '4.2x',
    change: '+1.39%',
    changeType: 'positive',
    icon: TrendingUp,
  },
  {
    name: 'Active Users',
    value: '2,420',
    change: '-1.39%',
    changeType: 'negative',
    icon: Users,
  },
]

export default function Dashboard() {
  const { user } = useAuthStore()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.user_metadata?.name || user?.email?.split('@')[0]}!
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Here's what's happening with your marketing campaigns today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.name} className="card p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Icon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <div className="card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Campaign Performance
          </h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Chart will be implemented with Chart.js</p>
          </div>
        </div>

        {/* Attribution Chart */}
        <div className="card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Channel Attribution
          </h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Attribution chart placeholder</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <BarChart3 className="h-4 w-4 text-primary-600" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    Campaign "Summer Sale" updated
                  </p>
                  <p className="text-sm text-gray-500">
                    Budget increased to $5,000
                  </p>
                </div>
                <div className="flex-shrink-0 text-sm text-gray-500">
                  2h ago
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}