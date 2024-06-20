import { Logs } from '@/components/Logs'
import { getLogs } from '@/services/get-logs'

export default async function Home() {
  return (
    <div>
      LOGS:
      <Logs fetchData={getLogs} />
    </div>
  )
}
