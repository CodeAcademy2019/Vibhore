var parsePromised = (file) => {
    return new Promise((resolve, reject) => {
      try {
        resolve(JSON.parse(file));
      } catch (e) {
        reject(e);
      }
    });
  }

  rej = (error) => {
    console.log(error.message);
  }
  
  parsePromised(process.argv[2]).then(null, rej);
//   * Build a function called `parsePromised` that creates a promise,performs `JSON.parse` in a `try`/`catch` block, and fulfills or rejectsthe promise depending on whether an error is thrown.
//**Note:** your function should synchronously return the promise!
//   * Build a sequence of steps like the ones shown above that catchesany thrown errors and logs them to the console.