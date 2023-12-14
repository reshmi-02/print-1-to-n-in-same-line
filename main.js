let input = parseInt(prompt("Enter the number"))
document.write("Given number = "+input+"<br>")

document.write("Output:<br><br>")
for(i=1;i<=input;i++){
    for(j=1;j<=i;j++){
        document.write(i)
    }
}
