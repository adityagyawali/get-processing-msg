import { getProcessingPage } from '../index'

test('should return message for next status after 2sec if the first status is processing', async () => {
  await expect(getProcessingPage([{ status: 'processing' }, { status: 'error', errorCode: null }])).resolves.toEqual({
    title: 'Error page',
    message: null,
  })
})

test('should return {title: Order complete,message: null} if the status is success', () => {
  expect(getProcessingPage([{ status: 'success' }, { status: 'error', errorCode: null }])).toEqual({
    title: 'Order complete',
    message: null,
  })
})

test('should return { title: Error page, message: Incorrect details have been entered} if the status is error with code INCORRECT_DETAILS', () => {
  expect(getProcessingPage([{ status: 'error', errorCode: 'INCORRECT_DETAILS' }])).toEqual({
    title: 'Error page',
    message: 'Incorrect details have been entered',
  })
})
