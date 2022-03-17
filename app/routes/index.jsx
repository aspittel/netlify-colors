import { Link } from 'remix'
import { Button } from '@aws-amplify/ui-react'

export default function Index () {
  return (
    <div>
      <Button>Hello!</Button>
      <Link to='/colors'>Colors!</Link>
    </div>
  )
}
