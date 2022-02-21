import { toast } from 'react-toastify'

const toastError = msg => {
  toast.error(msg ? msg : 'Something went wrong', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })
}

const toastWarning = msg => {
  toast.warn(msg ? msg : 'Something went wrong', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    icon: false
  })
}

const toastSuccess = msg => {
  toast.success(msg ? msg : 'Success', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })
}

export { toastError, toastWarning, toastSuccess }
