< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                <body>

                    <body>
                        <h2>if Conditional Statements</h2>
                        <h2>else-if Ladder Statements</h2>
                        <script src="./script.js"></script>
                    </body>
                </html>
                -ladder/script.js‎
                +36
                -8
                Lines changed: 36 additions & 8 deletions
                Original file line number	Diff line number	Diff line change
                @@ -1,12 +1,40 @@
// $$ "else-if" ladder is a control statement used to control flow of execution of program by checking conditions.
// $$ The "else-if" ladder has used to checking multiple conditions where the conditions is True then That Block will Execute.
// $$ In this one "if" statement and multiple "else if" statements and last else Statement.

// $$ "if()" statement is a control statement used to control flow of execution of a program.
// - by checking condition.

// $$ "If()"" block will execute only when the condition is True.

// Syntax: if(Condition){....code... }

                let num1=20;
                if(num1 == 20){
                    console.log("If Block Executed");
                // checking the Grade
                let marks=parseInt(prompt("Enter Your Marks: "));
if((marks>=36) && (marks<40)){
                    console.log("Passed");
}
else if((marks>= 40) && (marks<65)){
                    console.log(" Grade B ");
}
else if((marks>=66) && (marks<75)){
                    console.log("Grade B+");
}
else if((marks>=75) && (marks<90)){
                    console.log("Grade A");
}
else if((marks>=90) && (marks<100)){
                    console.log(" Grade A+ #topper");
}
else if(marks>100){
                    console.log("Sorry Marks are Invalid")
                }
                else if(marks<0){
                    console.log("Sorry Marks are Invalid");
    }
                else{
                    console.log("Fail..., All best for Next Exam")
                }
                0 commit comments
                Comments
                0
                (0)
                Comment
                You're not receiving notifications
            </body>
    </html>