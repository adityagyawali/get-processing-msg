type Status = 'processing' | 'error' | 'success'
type ErrorCode = 'NO_STOCK' | 'INCORRECT_DETAILS' | null | undefined

type StateAndErrorCode = {
  status: Status
  errorCode?: ErrorCode
}

function getMessage(status: Status, errorCode?: ErrorCode) {
  if (status === 'error' && !errorCode) {
    return { title: 'Error page', message: null }
  }

  if (status === 'error' && errorCode === 'NO_STOCK') {
    return { title: 'Error page', message: 'No stock has been found' }
  }

  if (status === 'error' && errorCode === 'INCORRECT_DETAILS') {
    return { title: 'Error page', message: 'Incorrect details have been entered' }
  }
  if (status === 'success') return { title: 'Order complete', message: null }
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export function getProcessingPage(statusAndErrorCode: StateAndErrorCode[]) {
  for (let i = 0; i < statusAndErrorCode.length; i++) {
    if (statusAndErrorCode[i].status === 'processing') {
      return wait(2000).then(() => getMessage(statusAndErrorCode[i + 1].status, statusAndErrorCode[i + 1].errorCode))
    }
    return getMessage(statusAndErrorCode[i].status, statusAndErrorCode[i].errorCode)
  }
}

console.log(getProcessingPage([{ status: 'processing' }, { status: 'error' }]))
