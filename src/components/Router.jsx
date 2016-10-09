import React from 'react'
import { observer } from 'mobx-react'

import Main from './Main'
import LoginSignup from './LoginSignup'
import CategoryManager from './CategoryManager'

function Router({ uiStore, userStore }) {
  if (!userStore.user.authenticated) {
    return <LoginSignup />
  }
  switch (uiStore.page) {
    case 'Categories': return <CategoryManager />
    default: return <Main />
  }
}

export default observer(['uiStore', 'userStore'], Router)
