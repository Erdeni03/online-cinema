import React from 'react'
import ReduxToastrLib from 'react-redux-toastr'

const ReduxToast = () => {
	return (
		<ReduxToastrLib
			newestOnTop={false}
			preventDuplicates
			progressBar
			closeOnToastrClick
			timeOut={3000}
			transitionIn="fadeIn"
			transitionOut="fadeOut"
		/>
	)
}

export default ReduxToast
