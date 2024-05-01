/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable react/react-in-jsx-scope */
import {
  Link,
  Outlet,
  useLocation,
  useNavigate
} from 'react-router-dom'
import logo6 from '../assets/logo6.png'

export const Nav = () => {
  const { state } = useLocation()
  const navigate = useNavigate()

  console.log(state)

  const onLogout = () => {
    navigate('/login', {
      replace: true
    })
  }

  return (
		<>
			<header>
				<h1>
					<Link to='/'>
                        <img src={logo6} alt="logo" />
                    </Link>
				</h1>

				{state?.logged
				  ? (
					<div className='user'>
						<span className='username'>{state?.name}</span>
						<button className='btn-logout' onClick={onLogout}>
							Cerrar sesión
						</button>
					</div>
				    )
				  : (
					<nav>
						<Link to='/login'>-Iniciar sesión-</Link>
						<Link to='/register'>----Registrarse---</Link>
					</nav>
				    )}
			</header>

			<Outlet />
		</>
  )
}
