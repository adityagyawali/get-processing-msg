## Get processing page

#### TASK DESCRIPTION:

```
You have been tasked with creating a helper function getProcessingPage, which should return one value as the output out of an array of data.

Each element of the input array has the following structure:

  {
    state: <String> // a state to go to
    errorCode: <String> // optional error code
  }

The helper function will behave differently based on the states:

· state is 'processing' à delay by 2 seconds, then fetch the next state

· state is 'error' à return the result object based on the error code provided (see below)

· state is 'success' à the function should return the object: { title: 'Order complete' message: null }

Handling error codes:

· 'NO_STOCK' = return from the helper with an object: { title: 'Error page', message: 'No stock has been found' }

· 'INCORRECT_DETAILS' = return from the helper with an object: { title: 'Error page', message: 'Incorrect details have been entered' }

· null = return from the helper with an object: { title: 'Error page', message: null }

· undefined = return from the helper with an object: { title: 'Error page', message: null }

Example usage:

getProcessingPage([{ state: 'processing' }, { state: 'error' }])

This code should return after 2 seconds with the object: { title: 'Error page', message: null }
```

#### RUNNING THE APP

1. Clone the repo from here `git@github.com:adityagyawali/get-processing-msg.git`
2. `yarn install` to install dependencies
3. `yarn dev` to run the app. You can change and check different status in index.ts file
4. `yarn
