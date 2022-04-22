// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import UserRolesLayout from 'src/layouts/UserRolesLayout'
import UsersLayout from 'src/layouts/UsersLayout'
import MainLayout from './layouts/MainLayout/MainLayout'
import SmbLayout from './layouts/SmbLayout/SmbLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={SmbLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/notifications" page={NotificationsPage} name="notifications" />
      </Set>
      <Set wrap={MainLayout}>
        <Set wrap={UserRolesLayout}>
          <Route path="/userroles/new" page={UserRoleNewUserRolePage} name="newUserRole" />
          <Route path="/userroles/{id:Int}/edit" page={UserRoleEditUserRolePage} name="editUserRole" />
          <Route path="/userroles" page={UserRoleUserRolesPage} name="userRoles" />
          <Route path="/userroles/{id:Int}" page={UserRoleUserRolePage} name="userRole" />
        </Set>
        <Set wrap={UsersLayout}>
          <Route path="/users/new" page={UserNewUserPage} name="newUser" />
          <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
          <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
          <Route path="/users" page={UserUsersPage} name="users" />
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
