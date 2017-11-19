function IcebreakerResponse(email){
  this.email = email
}
IcebreakerResponse.batchcreate(){
return emails.map(function(email)
{ return new IcebreakerResponse(email) 
