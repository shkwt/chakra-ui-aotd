module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "input",
        name: "fileName",
        message: "Enter file name: ",
      },
      {
        type: "input",
        name: "name",
        message: "Enter component name: ",
      },
      {
        type: "input",
        name: "description",
        message: "The description of this component: ",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { fileName, name, description } = answers;
      console.log("hoge", fileName, name, description);
      return { fileName, name, description };
    });
  },
};
