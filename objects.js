var customerDetails={
    "Name":"Tamil",
    "Age":30,
    "Phone":"9876543210"
}
console.log(customerDetails)
customerDetails["id"]="20ECR000"
console.log(customerDetails)
//2nd way

var customerDetails={}
customerDetails["id"]="20ECR000"
customerDetails["Name"]="Tamil"
customerDetails["Age"]=30
customerDetails["Phone"]="9876543210"

console.log(customerDetails)
//3rd way

var kongu =new Object()
kongu["fees"]=10000
kongu["accomodation"]="Excellent"
kongu["food"]="pretty Decent"
kongu["hostelcount"]=10
console.log(kongu)
console.log(kongu.food)
console.log(kongu["hostelcount"])