export const appGlobals = {
  appName: 'Apartment Manager',
  validationsInfo: {
    mobile: {
      min: 1000000000,
      max: 9999999999
    },
    flat : {
      min: 100,
      max: 999
    },
    email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
  },
  collections: {
    member: 'members',
    buzz: 'buzz'
  },
  buttonNames: {
    submit: 'Submit',
    reset: 'Reset'
  },
  labelNames : {
    success: 'Success',
    failure : 'Failure'
  },
  msg: {
    create: 'Saved Succesfully',
    update: 'Updated Successfully',
    delete: 'Deleted Successfully'
  }
};
