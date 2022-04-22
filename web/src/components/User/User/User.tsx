import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_USER_MUTATION = gql`
  mutation DeleteUserMutation($id: Int!) {
    deleteUser(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const User = ({ user }) => {
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User deleted')
      navigate(routes.users())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete user ' + id + '?')) {
      deleteUser({ variables: { id } })
    }
  }

  return (
    <div className="border border-gray-300">
      <section className=" flex flex-row">
        <div className="border border-red-300">
          <div className="rw-segment">

          <div className="rw-segment-header">
            <h2 className="rw-heading rw-heading-primary">
              User {user.id} Detail
            </h2>
            <table className="rw-table mx-auto">
              <tbody>
                <tr>
                  <th>Id</th>
                  <td>{user.id}</td>
                </tr>
                <tr>
                  <th>Uuid</th>
                  <td>{user.uuid}</td>
                </tr>
                <tr>
                  <th>First name</th>
                  <td>{user.firstName}</td>
                </tr>
                <tr>
                  <th>Last name</th>
                  <td>{user.lastName}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <th>Profile image</th>
                  <td>{user.profileImage}</td>
                </tr>
                <tr>
                  <th>Created at</th>
                  <td>{timeTag(user.createdAt)}</td>
                </tr>
                <tr>
                  <th>Updated at</th>
                  <td>{timeTag(user.updatedAt)}</td>
                </tr>
              </tbody>
            </table>
            <nav className="rw-button-group align-bottom">
              <Link
                to={routes.editUser({ id: user.id })}
                className="rw-button rw-button-blue"
              >
                Edit User
              </Link>
              <button
                type="button"
                className="rw-button rw-button-red"
                onClick={() => onDeleteClick(user.id)}
              >
                Delete
              </button>
            </nav>
          </div>
          </div>
        </div>
        <div className="border border-blue-300">
          <div className="rw-segment-header w-full">
            <h2 className="rw-heading rw-heading-primary">
              User {user.id} Roles
            </h2>
            <div className="h-5/6 bg-gray-50">
              <ul>
                {user.userRoles.map((role) => (
                  <li
                    key={role.id}
                    className="p-3 bg-gray-50 border-t border-gray-200"
                  >
                    {role.name}
                  </li>
                ))}
              </ul>
            </div>
            <nav className="rw-button-group align-bottom">
              <Link
                to={routes.editUser({ id: user.id })}
                className="rw-button rw-button-blue"
              >
                Edit User Roles
              </Link>
              <button
                type="button"
                className="rw-button rw-button-red"
                onClick={() => onDeleteClick(user.id)}
              >
                Delete User Roles
              </button>
            </nav>
        </div>
        </div>
      </section>
    </div>
  )

  // return (
  //   <>
  //     <div className="rw-segment">
  //       <header></header>
  //       <section className="flex flex-1 flex-row">
  //         <div className="w-1/2">
  // </div>
  //         <div className="w-2/6" >

  //         </div>
  //         </div>
  //       </section>
  //     </div>
  //   </>
  // )
}

export default User
