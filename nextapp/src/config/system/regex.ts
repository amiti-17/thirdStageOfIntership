class CreateRegexp {
  regex: {[index: string]: RegExp} = {};
  constructor() {
    Object.keys(this.regexStr).map(regexKey => {
      this.regex[regexKey] = new RegExp(this.regexStr[regexKey]);
    })
  }

  regexStr = {
    upperCase: "[A-Z]",
    lowerCase: "[a-z]",
    digit: "\\d",
  }
}

export const regexpObj = new CreateRegexp();