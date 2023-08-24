import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div>
      <h1>Git Blog</h1>

      <Outlet />
    </div>
  )
}
