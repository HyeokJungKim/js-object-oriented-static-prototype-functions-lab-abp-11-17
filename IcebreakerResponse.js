function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.prototype.BatchCreate(){
return emails.map(function(email)
{ return new IcebreakerResponse(email) }}
