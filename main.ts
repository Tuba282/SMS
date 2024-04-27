#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";

await figlet("Student Mangement System", function (err, data) {
  if (err) {
    console.log(chalk.red("Something went wrong"));
    console.dir(err);
  } else {
    console.log(chalk.bold.rgb(255, 255, 255)(data));
  }
});
//========================making class
async function start() {
  class student {
    name: string;
    id: string;
    course: string;
    balance: string;
    day: string;
    timing: string;

    constructor(
      name: string,
      id: string,
      course: string,
      balance: string,
      day: string,
      timing: string
    ) {
      this.name = name;
      this.id = id;
      this.course = course;
      this.balance = balance;
      this.day = day;
      this.timing = timing;
    }
    public get student_name() {
      return this.name;
    }

    public get student_course() {
      return this.course;
    }

    public get student_day() {
      return this.day;
    }
    public get student_timing() {
      return this.timing;
    }
    //===========================================making student generated id and balance
  }
  function student_balance() {
    let balance = Math.floor(Math.random() * 1000) + 9999;
    return `Rs:${balance}`;
  }
  function student_id() {
    let id = Math.floor(Math.random() * 10000) + 999;
    return `IT-${id}`;
  }
  let student_array: any[] = [];
  //=================making loop so our function never comes to end unless user want it to quit
  let loop = true;
  while (loop) {
    const Main = await inquirer.prompt([
      {
        name: "action",
        type: "list",
        message: chalk.hex(`#AFC947`)("What do you want to do ....?\n\n"),
        choices: [`Enroll`, `Veiw Status`, `Quit`],
      },
    ]);
    if (Main.action === `Enroll`) {
      let Answer = await inquirer.prompt([
        {
          name: "name",
          type: "input",
          message: chalk.hex(`#AFC947`)("Enter your name :\n\n "),
          validate: function (value) {
            if (value.trim() !== "") {
              return true;
            }
            return "Please enter your name\n(Press the arrow buttons to go again)";
          },
        },
        {
          name: "course",
          type: "list",
          message: chalk.hex(`#AFC947`)("In which Course you want to enroll in...?\n\n"),
          choices: [
            ` Certified AI`,
            ` Web 3.0`,
            ` Metaverse`,
            ` Internet Computing`,
          ],
        },
        {
          name: "day",
          type: "list",
          message: chalk.hex(`#AFC947`)("Which day you prefered \n\n"),
          choices: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        },
        {
          name: "time",
          type: "list",
          message: chalk.hex(`#AFC947`)("Which time you prefered \n\n"),
          choices: [`Morning`, `Afternoon`, `Evening`],
        },
      ]);

      let list = new student(
        Answer.name,
        student_id(),
        Answer.course,
        student_balance(),
        Answer.day,
        Answer.time
      );
      student_array.push(list);
      console.log(chalk.green(`\n\t\tCongrations you are successfully enrolled\n `));
    } else if (Main.action === `Veiw Status`) {

      if (student_array.length > 0) {
        for (let i = 0; i < student_array.length; i++) {
          const studentData = student_array[i];

          console.log(chalk.bold.bgBlueBright(`\n\t\t  Student No ${i + 1}  \n`));
          console.log(chalk.bold.hex(`#B5B6B0`)(`\t\tName:       ${studentData.student_name}`));
          console.log(chalk.bold.hex(`#B5B6B0`)(`\t\t ID:        ${student_id()}`));
          console.log(chalk.bold.hex(`#B5B6B0`)(`\t\t Course:   ${studentData.student_course}`));
          console.log(chalk.bold.hex(`#B5B6B0`)(`\t\tBalance:    ${student_balance()}`));
          console.log(chalk.bold.hex(`#B5B6B0`)(`\t\t Day:       ${studentData.student_day}`));
          console.log(chalk.bold.hex(`#B5B6B0`)(`\t\tTiming:    ${studentData.student_timing}`));
        }
      } else {
        console.log(chalk.red`\n\t\tThe list is Empity Please Add Students.\n`);
      }
    } else if (Main.action === `Quit`) {
      loop = false;
    }
  }
}
start();
